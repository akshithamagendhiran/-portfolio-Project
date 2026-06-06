# Personal Portfolio - Akshitha Shree M

## Project Overview
A modern, responsive personal portfolio website showcasing projects, skills, and professional information with a clean and professional design.

## Folder Structure

```
portfolio/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet with responsive design
│   ├── js/
│   │   └── script.js         # JavaScript for interactivity
│   └── images/               # Directory for portfolio images
└── README.md                 # This file
```

## Features

### 1. **Navigation Bar**
   - Sticky navigation that stays at the top while scrolling
   - Logo/brand name (ASM)
   - Responsive menu with hamburger toggle for mobile devices
   - Smooth scroll to sections

### 2. **Hero Section**
   - Eye-catching gradient background with purple theme
   - Welcome message with name highlight
   - Call-to-action button
   - Placeholder avatar (can be replaced with actual image)
   - Smooth animations on page load

### 3. **About Section**
   - Personal introduction
   - Skills displayed as interactive tags
   - Statistics (Projects, Experience, Clients)
   - Responsive grid layout

### 4. **Projects & Contact Sections**
   - Placeholder sections ready to be expanded
   - Social media links
   - Footer with copyright

## Design Features

- **Responsive Design**: Fully responsive on desktop, tablet, and mobile devices
- **Color Scheme**: 
  - Primary: Purple (#6c5ce7)
  - Secondary: Light Purple (#a29bfe)
  - Background: Light Gray (#f5f6fa)
- **Animations**: 
  - Smooth transitions and hover effects
  - Fade-in animations for elements
  - Slide-in animations for hero section
- **Typography**: Clean, modern sans-serif font (Segoe UI)
- **Icons**: Font Awesome icons for social media

## How to Use

1. **Open the Website**
   - Double-click `index.html` to open in your browser
   - Or right-click and select "Open with" → Your preferred browser

2. **Customize Content**
   - Edit `index.html` to change text, names, and links
   - Update social media links in the Contact section
   - Replace placeholder content as needed

3. **Add Images**
   - Place images in the `assets/images/` folder
   - Reference them in HTML using relative paths
   - Example: `<img src="assets/images/my-photo.jpg" alt="Description">`

4. **Modify Styling**
   - Edit `assets/css/style.css` to change colors, fonts, sizes
   - All CSS variables are defined at the top for easy customization

## Customization Tips

### Change Colors
Open `assets/css/style.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #6c5ce7;      /* Change primary color */
    --secondary-color: #a29bfe;    /* Change secondary color */
    --text-dark: #2d3436;          /* Change text color */
    /* ... more variables ... */
}
```

### Update Personal Information
Edit `index.html`:
- Change name from "Akshitha Shree M" to your name
- Update skills in the skill tags
- Modify statistics in the about section
- Add your social media links in the contact section

### Add Projects Section
Extend the projects section with project cards:
```html
<div class="project-card">
    <img src="assets/images/project.jpg" alt="Project Name">
    <h3>Project Name</h3>
    <p>Project description</p>
    <a href="#">View Project</a>
</div>
```

## Browser Compatibility
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 769px to 1199px
- **Mobile**: 480px to 768px
- **Small Mobile**: Below 480px

## Technical Stack
- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript (Vanilla)**: No frameworks required
- **Font Awesome**: Icon library

## Performance
- Lightweight and fast-loading
- Optimized CSS animations
- No external dependencies (except Font Awesome icons)
- Mobile-first responsive design

## Next Steps
1. Replace placeholder content with your actual information
2. Add project images to `assets/images/`
3. Add actual links to your social media profiles
4. Deploy to a hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Deployment Options
- **GitHub Pages**: Free hosting with Git
- **Netlify**: Easy deployment with drag-and-drop
- **Vercel**: Optimized for web projects
- **Traditional Hosting**: Upload files via FTP to any web server

---

**Created**: Day 1 - Portfolio Planning and Structure
**Last Updated**: 2026

launch.json:

{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch in Chrome",
            "type": "chrome",
            "request": "launch",
            "file": "${workspaceFolder}/index.html",
            "runtimeExecutable": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            "runtimeArgs": ["--remote-debugging-port=9222"],
            "sourceMaps": true,
            "webRoot": "${workspaceFolder}"
        },
        {
            "name": "Attach to Chrome",
            "type": "chrome",
            "request": "attach",
            "port": 9222,
            "pathMapping": {
                "/": "${workspaceFolder}/",
                "file://": "${workspaceFolder}/"
            }
        }
    ]
}
