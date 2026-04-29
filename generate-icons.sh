#!/bin/bash

# Simple placeholder PNG creation using ImageMagick (if available)
# Colors: Orange #faa633, Dark Orange #ee7723

echo "Creating placeholder PNG icons..."

# Prefer `magick` on Windows because `convert` often resolves to the system utility.
IMAGE_MAGICK_CMD=""
PLACEHOLDER_SOURCE="public/placeholder-logo.png"

copy_placeholder_icons() {
    if [ ! -f "$PLACEHOLDER_SOURCE" ]; then
        echo "⚠️ Placeholder source not found at $PLACEHOLDER_SOURCE"
        echo "Alternative: Use https://realfavicongenerator.net/ with /public/SVG/logo.svg"
        return 1
    fi

    echo "Using existing placeholder asset to create PNG icon files..."

    cp "$PLACEHOLDER_SOURCE" public/icon-16x16.png
    cp "$PLACEHOLDER_SOURCE" public/icon-32x32.png
    cp "$PLACEHOLDER_SOURCE" public/icon-192x192.png
    cp "$PLACEHOLDER_SOURCE" public/icon-512x512.png
    cp "$PLACEHOLDER_SOURCE" public/android-chrome-192x192.png
    cp "$PLACEHOLDER_SOURCE" public/android-chrome-512x512.png
    cp "$PLACEHOLDER_SOURCE" public/favicon-16x16.png
    cp "$PLACEHOLDER_SOURCE" public/favicon-32x32.png
    cp "$PLACEHOLDER_SOURCE" public/apple-touch-icon.png
    cp "$PLACEHOLDER_SOURCE" public/apple-touch-icon-152x152.png
    cp "$PLACEHOLDER_SOURCE" public/apple-touch-icon-120x120.png
    cp "$PLACEHOLDER_SOURCE" public/apple-touch-icon-76x76.png
    cp "$PLACEHOLDER_SOURCE" public/mstile-70x70.png
    cp "$PLACEHOLDER_SOURCE" public/mstile-150x150.png
    cp "$PLACEHOLDER_SOURCE" public/mstile-310x150.png
    cp "$PLACEHOLDER_SOURCE" public/mstile-310x310.png

    echo "✅ Placeholder PNG icon files created from public/placeholder-logo.png"
}

if command -v magick >/dev/null 2>&1; then
    IMAGE_MAGICK_CMD="magick"
elif command -v convert >/dev/null 2>&1 && convert --version 2>/dev/null | grep -qi "ImageMagick"; then
    IMAGE_MAGICK_CMD="convert"
elif ls /c/Program\ Files/ImageMagick-*/magick.exe >/dev/null 2>&1; then
    IMAGE_MAGICK_CMD=$(ls /c/Program\ Files/ImageMagick-*/magick.exe 2>/dev/null | head -n 1)
elif ls /c/Program\ Files\ \(x86\)/ImageMagick-*/magick.exe >/dev/null 2>&1; then
    IMAGE_MAGICK_CMD=$(ls /c/Program\ Files\ \(x86\)/ImageMagick-*/magick.exe 2>/dev/null | head -n 1)
fi

# Check if ImageMagick is available
if [ -n "$IMAGE_MAGICK_CMD" ]; then
    echo "Using ImageMagick to generate icons with $IMAGE_MAGICK_CMD..."
    
    # Generate basic orange square icons
    "$IMAGE_MAGICK_CMD" -size 16x16 xc:"#faa633" -fill white -gravity center -pointsize 8 -annotate +0+0 "O" public/icon-16x16.png
    "$IMAGE_MAGICK_CMD" -size 32x32 xc:"#faa633" -fill white -gravity center -pointsize 16 -annotate +0+0 "O" public/icon-32x32.png
    "$IMAGE_MAGICK_CMD" -size 192x192 xc:"#faa633" -fill white -gravity center -pointsize 96 -annotate +0+0 "OnGrid" public/icon-192x192.png
    "$IMAGE_MAGICK_CMD" -size 512x512 xc:"#faa633" -fill white -gravity center -pointsize 256 -annotate +0+0 "OnGrid" public/icon-512x512.png
    
    # Apple Touch Icons
    "$IMAGE_MAGICK_CMD" -size 180x180 xc:"#faa633" -fill white -gravity center -pointsize 90 -annotate +0+0 "OnGrid" public/apple-touch-icon.png
    "$IMAGE_MAGICK_CMD" -size 152x152 xc:"#faa633" -fill white -gravity center -pointsize 76 -annotate +0+0 "OnGrid" public/apple-touch-icon-152x152.png
    "$IMAGE_MAGICK_CMD" -size 120x120 xc:"#faa633" -fill white -gravity center -pointsize 60 -annotate +0+0 "OnGrid" public/apple-touch-icon-120x120.png
    "$IMAGE_MAGICK_CMD" -size 76x76 xc:"#faa633" -fill white -gravity center -pointsize 38 -annotate +0+0 "O" public/apple-touch-icon-76x76.png
    
    # Windows Tiles
    "$IMAGE_MAGICK_CMD" -size 70x70 xc:"#faa633" -fill white -gravity center -pointsize 35 -annotate +0+0 "O" public/mstile-70x70.png
    "$IMAGE_MAGICK_CMD" -size 150x150 xc:"#faa633" -fill white -gravity center -pointsize 75 -annotate +0+0 "OnGrid" public/mstile-150x150.png
    "$IMAGE_MAGICK_CMD" -size 310x150 xc:"#faa633" -fill white -gravity center -pointsize 75 -annotate +0+0 "OnGrid Solar" public/mstile-310x150.png
    "$IMAGE_MAGICK_CMD" -size 310x310 xc:"#faa633" -fill white -gravity center -pointsize 155 -annotate +0+0 "OnGrid\nSolar" public/mstile-310x310.png
    
    echo "✅ All PNG icons generated using ImageMagick"
else
    echo "⚠️ ImageMagick not found on PATH. Falling back to placeholder PNG copies."
    copy_placeholder_icons || true
fi

# Create a basic ICO file header (empty placeholder)
echo "Creating basic favicon.ico..."
python3 -c "
import struct
# ICO file header
ico_data = b'\\x00\\x00\\x01\\x00\\x01\\x00'  # Reserved, Type, Count
ico_data += b'\\x10\\x10\\x00\\x00\\x01\\x00\\x20\\x00'  # W, H, Colors, Reserved, Planes, BPP
ico_data += struct.pack('<L', 1024)  # Size
ico_data += struct.pack('<L', 22)    # Offset
# Simple 16x16 RGBA bitmap
ico_data += b'\\x28\\x00\\x00\\x00\\x10\\x00\\x00\\x00\\x20\\x00\\x00\\x00\\x01\\x00\\x20\\x00'
ico_data += b'\\x00\\x00\\x00\\x00\\x00\\x04\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'
ico_data += b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'
# Orange pixels (16x16 = 256 pixels * 4 bytes BGRA)
orange = b'\\x33\\xa6\\xfa\\xff'  # BGRA format for #faa633
ico_data += orange * 256
# AND mask (32 bytes of 0x00 for opaque)
ico_data += b'\\x00' * 32
with open('public/favicon.ico', 'wb') as f:
    f.write(ico_data)
" 2>/dev/null || echo "⚠️ Python not available for ICO generation"

echo "✅ Favicon setup complete!"
echo "📝 See FAVICON-README.md for professional icon generation instructions"