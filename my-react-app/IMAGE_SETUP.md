# Image Setup Guide

## Where to Store Images

### 1. **Logo Image**
- **Location:** `my-react-app/public/logo.png`
- **Usage:** The Kardeai logo (green circular logo)
- **Recommended size:** 120x120px or similar square format

### 2. **Hero Background Image**
- **Location:** `my-react-app/public/hero-bg.jpg`
- **Usage:** The main background image (hand holding lightbulb with plant)
- **Recommended size:** 1920x1080px or higher for full HD displays

## Why Use the `public` Folder?

Images in the `public` folder:
- Are served directly without processing
- Can be referenced with `/filename.jpg` in your code
- Are perfect for static assets like backgrounds and logos
- Don't get renamed during build

## Alternative: Using `src/assets/images/`

If you prefer to import images in your components:

1. Create folder: `my-react-app/src/assets/images/`
2. Place images there
3. Import in components:
   ```jsx
   import logo from '../assets/images/logo.png';
   import heroBg from '../assets/images/hero-bg.jpg';
   ```

## Current Setup

The project is configured to use the `public` folder approach for simplicity.

**Next Steps:**
1. Save your logo as `public/logo.png`
2. Save your background image as `public/hero-bg.jpg`
3. Run `npm run dev` to start the development server





   <img src="  " alt="Leaf" className="get-started-leaf" />

