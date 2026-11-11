#!/usr/bin/env python3
"""
Studio Portrait Processing Tool for Abhipraya Portfolio
Takes a high-resolution studio photo (ideally front-facing bust with transparent or light background)
and generates the two precisely registered production layers:
1. portrait-cutout-coder.png (natural photographic appearance)
2. portrait-cutout-designer.png (artistic painterly graphic composition)
"""

import sys
import os
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

def process_portrait(input_path, output_dir=None):
    if not os.path.exists(input_path):
        print(f"Error: Input file not found: {input_path}")
        return False

    if output_dir is None:
        # Default to assets/portrait/ and assets/
        repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        output_dirs = [
            os.path.join(repo_root, "assets", "portrait"),
            os.path.join(repo_root, "assets")
        ]
    else:
        output_dirs = [output_dir]

    print(f"Reading input image: {input_path}...")
    img = cv2.imread(input_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print("Error: Could not decode image.")
        return False

    h, w = img.shape[:2]
    print(f"Original image size: {w}x{h}")

    # Check if already transparent PNG
    if img.shape[2] == 4:
        print("Image has alpha channel. Using existing transparency...")
        b, g, r, a = cv2.split(img)
    else:
        print("Extracting foreground using contour distance...")
        b, g, r = cv2.split(img)
        # Background assumption: corners
        bg_corners = np.vstack([
            img[0:15, 0:15],
            img[0:15, w-15:w]
        ]).reshape(-1, 3)
        bg_mean = np.mean(bg_corners, axis=0)
        dist = np.linalg.norm(img.astype(np.float32) - bg_mean, axis=2)
        binary = (dist > 18).astype(np.uint8) * 255
        contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        a = np.zeros((h, w), dtype=np.uint8)
        if contours:
            largest = max(contours, key=cv2.contourArea)
            cv2.drawContours(a, [largest], -1, 255, thickness=cv2.FILLED)
        a = cv2.GaussianBlur(a, (5, 5), 0)

    # Feather bottom 80px
    for y in range(h - 80, h):
        factor = (h - 1 - y) / 80.0
        a[y, :] = (a[y, :].astype(float) * factor).astype(np.uint8)

    # 1. LAYER B: CODER (Natural photograph)
    coder_rgba = Image.fromarray(cv2.merge([r, g, b, a]))

    # 2. LAYER A: DESIGNER (Artistic painted graphic composition)
    rgb_im = coder_rgba.convert('RGB')
    enhancer_c = ImageEnhance.Color(rgb_im)
    designer_base = enhancer_c.enhance(1.35)
    enhancer_con = ImageEnhance.Contrast(designer_base)
    designer_base = enhancer_con.enhance(1.18)
    designer_rgba = designer_base.convert('RGBA')
    designer_rgba.putalpha(coder_rgba.split()[3])

    # Painterly overlay layer
    paint_layer = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(paint_layer)

    np.random.seed(77)
    palette = [
        (40, 93, 202, 60),    # Cobalt blue #285DCA
        (14, 165, 233, 50),   # Cyan #0EA5E9
        (96, 165, 250, 45),   # Soft sky blue
        (30, 58, 138, 55),    # Deep midnight indigo
        (240, 240, 237, 70),  # Soft highlight
    ]

    for _ in range(95):
        bx = np.random.randint(15, int(w * 0.55))
        by = np.random.randint(40, h - 80)
        rx = np.random.randint(20, 85)
        ry = np.random.randint(15, 55)
        c = palette[np.random.randint(0, len(palette))]
        pdraw.ellipse([bx - rx, by - ry, bx + rx, by + ry], fill=c)

    paint_layer = paint_layer.filter(ImageFilter.GaussianBlur(radius=8))

    # Sharp bezier & registration graphics
    pdraw_s = ImageDraw.Draw(paint_layer)
    pdraw_s.line([(35, 260), (75, 185), (145, 165), (225, 215)], fill=(14, 165, 233, 170), width=3)
    for px, py in [(35, 260), (75, 185), (145, 165), (225, 215)]:
        pdraw_s.ellipse([px-4, py-4, px+4, py+4], fill=(255, 255, 255, 240), outline=(40, 93, 202, 240), width=2)

    pdraw_s.line([(35, 30), (35, 60)], fill=(40, 93, 202, 180), width=1)
    pdraw_s.line([(20, 45), (50, 45)], fill=(40, 93, 202, 180), width=1)
    pdraw_s.arc([(22, 32), (48, 58)], 0, 360, fill=(40, 93, 202, 140), width=1)

    swatches = [(40, 93, 202, 240), (14, 165, 233, 240), (96, 165, 250, 240), (248, 248, 246, 240)]
    for i, sc in enumerate(swatches):
        pdraw_s.rectangle([35 + i * 24, h - 90, 54 + i * 24, h - 72], fill=sc, outline=(255, 255, 255, 200))

    designer_comp = Image.alpha_composite(designer_rgba, paint_layer)
    designer_comp.putalpha(coder_rgba.split()[3])

    for out_d in output_dirs:
        os.makedirs(out_d, exist_ok=True)
        coder_rgba.save(os.path.join(out_d, "portrait-cutout-coder.png"), "PNG")
        coder_rgba.save(os.path.join(out_d, "portrait-cutout-coder.webp"), "WEBP")
        designer_comp.save(os.path.join(out_d, "portrait-cutout-designer.png"), "PNG")
        designer_comp.save(os.path.join(out_d, "portrait-cutout-designer.webp"), "WEBP")
        print(f"Saved layers to: {out_d}")

    print("Success! Both layers generated and saved.")
    return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python generate_split_portrait.py <path_to_photo.jpg/png>")
        sys.exit(1)
    process_portrait(sys.argv[1])
