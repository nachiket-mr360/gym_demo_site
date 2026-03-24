# Iron Forge Gym - Professional Fitness Website

A modern, fully responsive, and highly animated gym website built with HTML, CSS, and JavaScript. This premium dark-themed design features smooth animations, interactive elements, and a professional layout perfect for any fitness business.

## 🎯 Features

### Design Highlights
- ✅ **Dark Theme** with bold red/orange accent colors
- ✅ **Glassmorphism Effects** and modern gradients
- ✅ **Smooth Animations** (fade-in, slide, scale, hover effects)
- ✅ **Scroll-Triggered Animations** using Intersection Observer
- ✅ **Fully Responsive** (mobile, tablet, desktop)
- ✅ **Professional UI/UX** suitable for real gym businesses

### Interactive Elements
- ✅ Animated preloader/loading screen
- ✅ Sticky navbar with scroll effect
- ✅ Mobile hamburger menu
- ✅ Smooth scroll navigation
- ✅ Animated hero section with stats counter
- ✅ Testimonials slider with auto-play
- ✅ Image gallery with lightbox effect
- ✅ Contact form with validation
- ✅ Scroll-to-top button
- ✅ 3D tilt effects on cards

### Sections Included
1. **Navigation Bar** - Sticky, responsive with smooth scroll
2. **Hero Section** - Animated headline, CTA buttons, statistics
3. **About Section** - Gym description with image layout
4. **Services Section** - Training program cards
5. **Trainers Section** - Team profiles with hover effects
6. **Membership Plans** - Pricing cards with features
7. **Testimonials** - Sliding member reviews
8. **Gallery** - Image grid with zoom effect
9. **Contact Section** - Form with validation + map placeholder
10. **Footer** - Social links, newsletter, quick links

## 📁 File Structure

```
gym/
│
├── index.html          # Main HTML file
├── styles.css          # Complete styling with animations
├── script.js           # JavaScript for interactivity
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Local Development
1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process required.

### Option 2: Live Server (Recommended)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will open with hot-reload enabled

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in `styles.css` (lines 8-25):

```css
:root {
    --primary-color: #ff4757;      /* Main accent color (red) */
    --primary-dark: #e84118;       /* Darker shade */
    --secondary-color: #ffa502;    /* Secondary accent (orange) */
    --accent-color: #3742fa;       /* Additional accent (blue) */
    
    /* You can change these to match your brand */
}
```

### Changing Images
All images are loaded from Unsplash. To use your own:

1. Replace the `src` attributes in `index.html`
2. Or add your images to an `images/` folder
3. Update paths like: `src="images/your-image.jpg"`

**Image Locations:**
- Hero Background: Line 79 in `index.html`
- About Images: Lines 127-128
- Trainer Photos: Lines 232, 247, 262, 277
- Gallery Images: Lines 387-392
- Testimonial Avatars: Lines 350, 363, 376, 389

### Editing Text Content
All text is in `index.html`. Key sections to edit:

- **Gym Name**: Search for "IRON FORGE" (appears in navbar and footer)
- **Hero Headline**: Line 82
- **About Text**: Lines 134-136
- **Services**: Lines 165-220
- **Trainer Bios**: Lines 235-285
- **Pricing**: Lines 300-360
- **Contact Info**: Lines 419-448

### Adjusting Animations

**Animation Speed:**
Edit in `styles.css` (lines 35-37):
```css
--transition-fast: 0.3s ease;
--transition-medium: 0.5s ease;
--transition-slow: 0.8s ease;
```

**Preloader Duration:**
Edit in `script.js` (line 16):
```javascript
setTimeout(() => {
    preloader.style.display = 'none';
}, 2000); // Change 2000 to adjust duration (in milliseconds)
```

### Adding Google Maps
Replace the map placeholder (line 465 in `index.html`) with:
```html
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL" 
    width="100%" 
    height="450" 
    frameborder="0" 
    style="border:0; border-radius: 15px;" 
    allowfullscreen>
</iframe>
```

## 🔧 Browser Compatibility

Tested and working on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎯 Performance Tips

1. **Optimize Images**: Use tools like TinyPNG to compress images
2. **Minify Files**: Use online minifiers for CSS and JS before production
3. **Enable Caching**: Add cache headers on your server
4. **Use CDN**: Host Font Awesome and Google Fonts via CDN (already configured)

## 🌐 Deployment

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files
3. Go to Settings > Pages
4. Select main branch and save
5. Your site will be live at `https://username.github.io/repo-name`

### Netlify (Free)
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly

### Traditional Hosting
Upload all files to your web host's public_html or www directory via FTP.

## 📝 Form Integration

The contact form currently simulates submission. To make it functional:

### Option 1: Formspree (Free & Easy)
1. Go to [Formspree](https://formspree.io/)
2. Create a free account
3. Replace the form tag in `index.html` (line 441):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS (JavaScript-based)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add EmailJS SDK to your HTML
3. Configure in `script.js`

### Option 3: Backend Integration
Connect to PHP, Node.js, or Python backend for custom email handling.

## 🎨 Font Information

**Google Fonts Used:**
- **Poppins**: Body text (clean, modern sans-serif)
- **Montserrat**: Headings (bold, impactful sans-serif)

Both fonts are loaded automatically via Google Fonts CDN.

## 🎨 Icon Library

**Font Awesome 6.4.0** is used for all icons. Browse available icons at:
[Font Awesome Icons](https://fontawesome.com/icons)

## 💡 Advanced Customizations

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style with CSS in `styles.css`
3. Add scroll reveal class: `class="reveal"`
4. JavaScript will automatically animate it on scroll

### Changing Animation Triggers
Edit the scroll trigger offset in `script.js` (line 105):
```javascript
const elementVisible = 150; // Increase to trigger later, decrease for earlier
```

### Adjusting Slider Auto-Play
Change interval in `script.js` (line 222):
```javascript
setInterval(nextSlide, 5000); // Change 5000 to adjust speed (in milliseconds)
```

## 🐛 Troubleshooting

**Animations not working?**
- Check browser console for errors
- Ensure JavaScript is enabled
- Clear browser cache

**Images not loading?**
- Check internet connection (Unsplash requires connection)
- Replace with local images if needed

**Mobile menu not working?**
- Clear browser cache
- Check if JavaScript is loaded properly

**Form validation not working?**
- Ensure `script.js` is linked correctly
- Check browser console for errors

## 📊 SEO Optimization

To improve search engine visibility:

1. Add meta description in `<head>`:
```html
<meta name="description" content="Your gym description here">
```

2. Add keywords:
```html
<meta name="keywords" content="gym, fitness, workout, personal training">
```

3. Add Open Graph tags for social media sharing

4. Create a `sitemap.xml` for better indexing

## 🔒 Security Notes

- Never commit sensitive information (API keys, passwords)
- Use environment variables for production
- Implement reCAPTCHA for forms in production
- Use HTTPS in production

## 📄 License

This template is free to use for both personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Support

If you encounter issues:
1. Check this README
2. Inspect browser console for errors
3. Verify all files are properly linked
4. Clear browser cache

## 🎉 Credits

**Designed and Developed with ❤️**

Images courtesy of:
- Unsplash (https://unsplash.com/)
- RandomUser.me (for testimonial avatars)

Icons by:
- Font Awesome (https://fontawesome.com/)

Fonts by:
- Google Fonts (https://fonts.google.com/)

## 🌟 Show Your Support

If you like this project, please give it a star ⭐ on GitHub!

---

**Happy Coding! 💪🏋️‍♂️**
