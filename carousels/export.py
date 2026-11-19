#!/usr/bin/env python3
"""
Interactive Carousel Playwright Exporter (Logikanya.Tech x Instagram Carousel Skill)
Exports 420x525px single-file HTML carousel slides into 1080x1350px PNGs at device_scale_factor=2.5714.

Usage:
  python3 carousels/export.py --input <path_to_carousel.html> [--output <output_dir>]
"""

import argparse
import asyncio
import os
import sys
from playwright.async_api import async_playwright

def find_chrome_executable():
    possible_paths = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
        "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "/usr/bin/google-chrome",
        "/usr/bin/google-chrome-stable",
        "/usr/bin/chromium",
        "/usr/bin/chromium-browser",
    ]
    for p in possible_paths:
        if os.path.exists(p):
            return p
    return None

async def export_carousel(html_path: str, output_dir: str):
    if not os.path.exists(html_path):
        print(f"Error: HTML file not found at {html_path}")
        sys.exit(1)

    os.makedirs(output_dir, exist_ok=True)

    DESIGN_WIDTH = 420
    DESIGN_HEIGHT = 525
    EXPORT_WIDTH = 1080
    EXPORT_HEIGHT = 1350
    SCALE_FACTOR = EXPORT_WIDTH / DESIGN_WIDTH  # 2.5714285714285716

    chrome_path = find_chrome_executable()

    async with async_playwright() as p:
        launch_args = {"headless": True}
        if chrome_path:
            launch_args["executable_path"] = chrome_path
            print(f"[Export] Menggunakan browser sistem: {chrome_path}")
        else:
            print("[Export] Menggunakan Playwright Chromium bundled")

        browser = await p.chromium.launch(**launch_args)
        page = await browser.new_page(
            viewport={"width": DESIGN_WIDTH, "height": DESIGN_HEIGHT},
            device_scale_factor=SCALE_FACTOR,
        )

        file_url = f"file://{os.path.abspath(html_path)}"
        print(f"[Export] Memuat {file_url} (Viewport {DESIGN_WIDTH}x{DESIGN_HEIGHT} @ scale {SCALE_FACTOR:.4f}x)...")
        await page.goto(file_url, wait_until="networkidle")

        # Wait for web fonts & icons to settle
        await page.evaluate("() => document.fonts ? document.fonts.ready : Promise.resolve()")
        await page.wait_for_timeout(1500)

        # Hide preview chrome elements (arrows, dots, controls)
        await page.evaluate("""
            () => {
                const selectors = [
                    '.ig-header', '.ig-dots', '.ig-actions', '.ig-caption', 
                    '.carousel-controls', '.export-toolbar', '.nav-btn'
                ];
                selectors.forEach(sel => {
                    document.querySelectorAll(sel).forEach(el => el.style.display = 'none');
                });
                const frame = document.querySelector('.ig-frame');
                if (frame) {
                    frame.style.border = 'none';
                    frame.style.boxShadow = 'none';
                    frame.style.margin = '0';
                    frame.style.padding = '0';
                }
                const track = document.querySelector('.carousel-track');
                if (track) track.style.transition = 'none';
            }
        """)

        slide_count = await page.evaluate("""
            () => document.querySelectorAll('.carousel-track .slide').length
        """)

        if slide_count == 0:
            print("[Export] Peringatan: Tidak ada elemen '.carousel-track .slide' ditemukan!")
            await browser.close()
            return

        print(f"[Export] Ditemukan {slide_count} slide. Memulai render ke {output_dir}...")

        for i in range(slide_count):
            offset = i * DESIGN_WIDTH
            await page.evaluate(f"""
                () => {{
                    const track = document.querySelector('.carousel-track');
                    if (track) track.style.transform = 'translateX(-{offset}px)';
                }}
            """)
            await page.wait_for_timeout(100)

            output_file = os.path.join(output_dir, f"slide_{i + 1:02d}.png")
            await page.screenshot(
                path=output_file,
                clip={
                    "x": 0,
                    "y": 0,
                    "width": DESIGN_WIDTH,
                    "height": DESIGN_HEIGHT,
                },
            )
            print(f"  ✓ Berhasil diekspor: {output_file} ({EXPORT_WIDTH}x{EXPORT_HEIGHT}px)")

        await browser.close()
        print(f"\n[Selesai] Seluruh {slide_count} slide berhasil diekspor ke: {output_dir}")

def main():
    parser = argparse.ArgumentParser(description="Export HTML Carousel to PNG")
    parser.add_argument("--input", "-i", required=True, help="Path ke file carousel.html")
    parser.add_argument("--output", "-o", default=None, help="Folder output untuk menyimpan file PNG")
    args = parser.parse_args()

    html_path = os.path.abspath(args.input)
    if args.output:
        out_dir = os.path.abspath(args.output)
    else:
        out_dir = os.path.join(os.path.dirname(html_path), "slides")

    asyncio.run(export_carousel(html_path, out_dir))

if __name__ == "__main__":
    main()
