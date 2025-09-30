# Favicon and Icon Generation Instructions

## Icons Needed

The site is configured to use the following icon files:

### Standard Icons

- `favicon.ico` (16x16, 32x32, 48x48) - Traditional favicon
- `favicon.svg` ✅ - Modern SVG favicon (already created)
- `icon-16x16.png` - 16x16 PNG
- `icon-32x32.png` - 32x32 PNG
- `icon-192x192.png` - 192x192 PNG (Android/PWA)
- `icon-512x512.png` - 512x512 PNG (Android/PWA)

### Apple Touch Icons

- `apple-touch-icon.png` - 180x180 (iPhone/iPad)
- `apple-touch-icon-152x152.png` - 152x152 (iPad)
- `apple-touch-icon-120x120.png` - 120x120 (iPhone)
- `apple-touch-icon-76x76.png` - 76x76 (iPad)

### Windows Tiles

- `mstile-70x70.png` - 70x70 (Small tile)
- `mstile-150x150.png` - 150x150 (Medium tile)
- `mstile-310x150.png` - 310x150 (Wide tile)
- `mstile-310x310.png` - 310x310 (Large tile)

### Additional Files

- `safari-pinned-tab.svg` ✅ - Safari pinned tab (already created)
- `site.webmanifest` ✅ - Web app manifest (already created)
- `browserconfig.xml` ✅ - Windows tile config (already created)

## Generation Methods

### Method 1: Using Online Tools

1. Visit https://realfavicongenerator.net/
2. Upload the `/public/SVG/logo.svg` file
3. Configure settings:
   - iOS: Use #faa633 background
   - Android: Use #faa633 background
   - Windows: Use #faa633 tile color
   - Safari: Use existing `/public/safari-pinned-tab.svg`
4. Download and extract all files to `/public/` folder

### Method 2: Using CLI Tools

```bash
# Install favicon generator
npm install -g favicon

# Generate from SVG
favicon public/SVG/logo.svg public/

# Or using ImageMagick
convert public/SVG/logo.svg -resize 16x16 public/icon-16x16.png
convert public/SVG/logo.svg -resize 32x32 public/icon-32x32.png
convert public/SVG/logo.svg -resize 192x192 public/icon-192x192.png
convert public/SVG/logo.svg -resize 512x512 public/icon-512x512.png
convert public/SVG/logo.svg -resize 180x180 public/apple-touch-icon.png
```

### Method 3: Design Tools

Use the `/public/icon-template.html` as a reference to create icons in:

- Figma
- Adobe Illustrator
- Canva
- GIMP

## Brand Colors

- Primary Orange: #faa633
- Secondary Orange: #ee7723
- White: #ffffff

## Current Status

✅ SVG favicon created
✅ Safari pinned tab SVG created  
✅ Web manifest created
✅ Browser config created
✅ Meta tags configured in layout.tsx
⚠️ PNG/ICO files need to be generated

## Testing

After generating icons, test on:

- Chrome (favicon.svg, PNG icons)
- Safari (apple-touch-icon.png, safari-pinned-tab.svg)
- Firefox (favicon.ico, PNG icons)
- Edge (mstile-\* for pinned sites)
- Mobile devices (PWA icons)
