#!/bin/bash

# Simple placeholder PNG creation using ImageMagick (if available)
# Colors: Orange #faa633, Dark Orange #ee7723

echo "Creating placeholder PNG icons..."

# Check if ImageMagick is available
if command -v convert &> /dev/null; then
    echo "Using ImageMagick to generate icons..."
    
    # Generate basic orange square icons
    convert -size 16x16 xc:"#faa633" -fill white -gravity center -pointsize 8 -annotate +0+0 "O" public/icon-16x16.png
    convert -size 32x32 xc:"#faa633" -fill white -gravity center -pointsize 16 -annotate +0+0 "O" public/icon-32x32.png
    convert -size 192x192 xc:"#faa633" -fill white -gravity center -pointsize 96 -annotate +0+0 "OnGrid" public/icon-192x192.png
    convert -size 512x512 xc:"#faa633" -fill white -gravity center -pointsize 256 -annotate +0+0 "OnGrid" public/icon-512x512.png
    
    # Apple Touch Icons
    convert -size 180x180 xc:"#faa633" -fill white -gravity center -pointsize 90 -annotate +0+0 "OnGrid" public/apple-touch-icon.png
    convert -size 152x152 xc:"#faa633" -fill white -gravity center -pointsize 76 -annotate +0+0 "OnGrid" public/apple-touch-icon-152x152.png
    convert -size 120x120 xc:"#faa633" -fill white -gravity center -pointsize 60 -annotate +0+0 "OnGrid" public/apple-touch-icon-120x120.png
    convert -size 76x76 xc:"#faa633" -fill white -gravity center -pointsize 38 -annotate +0+0 "O" public/apple-touch-icon-76x76.png
    
    # Windows Tiles
    convert -size 70x70 xc:"#faa633" -fill white -gravity center -pointsize 35 -annotate +0+0 "O" public/mstile-70x70.png
    convert -size 150x150 xc:"#faa633" -fill white -gravity center -pointsize 75 -annotate +0+0 "OnGrid" public/mstile-150x150.png
    convert -size 310x150 xc:"#faa633" -fill white -gravity center -pointsize 75 -annotate +0+0 "OnGrid Solar" public/mstile-310x150.png
    convert -size 310x310 xc:"#faa633" -fill white -gravity center -pointsize 155 -annotate +0+0 "OnGrid\nSolar" public/mstile-310x310.png
    
    echo "✅ All PNG icons generated using ImageMagick"
else
    echo "⚠️ ImageMagick not found. Please install ImageMagick or use online favicon generator."
    echo "Alternative: Use https://realfavicongenerator.net/ with /public/SVG/logo.svg"
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