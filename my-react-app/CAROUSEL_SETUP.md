# Client Carousel Setup Guide

## Overview
A responsive, auto-scrolling carousel component for displaying client logos in circular containers.

## Features
✅ Smooth infinite auto-scroll (left to right)
✅ Manual navigation with arrow buttons
✅ Fully responsive (7 logos on desktop, fewer on mobile)
✅ Clean white background
✅ Hover effects on logos
✅ Placeholder images if logos fail to load

## Where to Store Client Logos

### Recommended: Public Folder
Create a folder: `my-react-app/public/clients/`

Place your logo images:
```
public/
  clients/
    logo1.png
    logo2.png
    logo3.png
    ...
```

## How to Add Your Logos

### Option 1: Update the logos array in ClientCarousel.jsx

```jsx
const logos = [
  '/clients/your-logo-1.png',
  '/clients/your-logo-2.png',
  '/clients/your-logo-3.png',
  // Add more logos...
];
```

### Option 2: Create a separate config file

Create `src/config/clientLogos.js`:
```jsx
export const clientLogos = [
  '/clients/logo1.png',
  '/clients/logo2.png',
  '/clients/logo3.png',
  // Add more...
];
```

Then import in ClientCarousel.jsx:
```jsx
import { clientLogos } from '../config/clientLogos';
// Use clientLogos instead of logos array
```

## Customization

### Change Auto-Scroll Speed
In `ClientCarousel.jsx`, line 32:
```jsx
}, 3000); // Change 3000 to desired milliseconds
```

### Change Number of Visible Logos
In `ClientCarousel.css`:
- Desktop (7 logos): `.carousel-item { flex: 0 0 calc(100% / 7 - 34.29px); }`
- Change `7` to your desired number

### Change Logo Circle Size
In `ClientCarousel.css`:
```css
.logo-circle {
  width: 140px;  /* Change this */
  height: 140px; /* Change this */
}
```

### Change Colors
- Hover color: `.carousel-arrow:hover { background: #B1EA79; }`
- Title color: `.client-carousel-title { color: #3a4a3a; }`

## Responsive Breakpoints
- Desktop: 7 logos (1200px+)
- Tablet: 5 logos (768px - 1200px)
- Mobile: 3 logos (480px - 768px)
- Small Mobile: 2 logos (< 480px)

## Tips
- Use PNG images with transparent backgrounds for best results
- Recommended logo size: 200x200px minimum
- Keep file sizes small for faster loading
- Use consistent aspect ratios for all logos
