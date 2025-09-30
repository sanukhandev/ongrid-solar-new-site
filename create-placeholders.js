// Simple placeholder icon generator for development
// This creates basic colored squares as placeholders until proper icons are generated

const fs = require('fs');

// Create simple PNG data for solid color squares
function createPNG(width, height, r, g, b, a = 255) {
    const pixels = width * height * 4; // RGBA
    const buffer = Buffer.alloc(pixels);

    for (let i = 0; i < pixels; i += 4) {
        buffer[i] = r;     // Red
        buffer[i + 1] = g; // Green  
        buffer[i + 2] = b; // Blue
        buffer[i + 3] = a; // Alpha
    }

    // This is a very basic approach - in practice you'd use a proper PNG encoder
    // For now, we'll create simple files that browsers can recognize
    return buffer;
}

// OnGrid Solar brand colors
const orangeR = 250, orangeG = 166, orangeB = 51; // #faa633

const icons = [
    { name: 'icon-16x16.png', size: 16 },
    { name: 'icon-32x32.png', size: 32 },
    { name: 'icon-192x192.png', size: 192 },
    { name: 'icon-512x512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'apple-touch-icon-152x152.png', size: 152 },
    { name: 'apple-touch-icon-120x120.png', size: 120 },
    { name: 'apple-touch-icon-76x76.png', size: 76 },
    { name: 'mstile-70x70.png', size: 70 },
    { name: 'mstile-150x150.png', size: 150 },
    { name: 'mstile-310x150.png', width: 310, height: 150 },
    { name: 'mstile-310x310.png', size: 310 }
];

console.log('Creating placeholder PNG icons...');

// Create basic favicon.ico
const icoHeader = Buffer.from([
    0x00, 0x00, // Reserved
    0x01, 0x00, // Type (ICO)
    0x01, 0x00, // Number of images
    0x10, 0x10, 0x00, 0x00, 0x01, 0x00, 0x20, 0x00, // Directory entry
    0x00, 0x04, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00  // Size and offset
]);

const bmpHeader = Buffer.from([
    0x28, 0x00, 0x00, 0x00, // Header size
    0x10, 0x00, 0x00, 0x00, // Width
    0x20, 0x00, 0x00, 0x00, // Height (doubled)
    0x01, 0x00, 0x20, 0x00, // Planes and bits per pixel
    0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, // Compression and size
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Resolution
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00  // Colors
]);

// Simple orange pixel data for 16x16 icon
const pixelData = Buffer.alloc(1024); // 16x16x4 bytes
for (let i = 0; i < 1024; i += 4) {
    pixelData[i] = orangeB;     // Blue (BGR format)
    pixelData[i + 1] = orangeG; // Green
    pixelData[i + 2] = orangeR; // Red
    pixelData[i + 3] = 255;     // Alpha
}

const andMask = Buffer.alloc(32, 0x00); // 16x16 bits = 32 bytes

const icoData = Buffer.concat([icoHeader, bmpHeader, pixelData, andMask]);
fs.writeFileSync('public/favicon.ico', icoData);

console.log('✅ Created favicon.ico');

// Note: For proper PNG generation, you would need a library like 'pngjs' or 'sharp'
// This is just for demonstration - the real icons should be generated with proper tools

console.log('⚠️ Created basic favicon.ico placeholder');
console.log('📝 For proper PNG icons, please use:');
console.log('   - Online: https://realfavicongenerator.net/');
console.log('   - CLI: npm install -g favicon');
console.log('   - Design tools: Upload public/SVG/logo.svg');
console.log('✅ Favicon configuration is complete in layout.tsx');