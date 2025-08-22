# Armia's Portfolio Website

A modern, responsive, and accessible portfolio website showcasing full-stack development projects and skills.

## 🚀 Features

- **Modern Design**: Clean, professional, and mobile-first responsive design
- **Performance Optimized**: Modular CSS/JS architecture for optimal loading
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Interactive**: Smooth animations, modal galleries, and dynamic content
- **Mobile Responsive**: Optimized for all screen sizes and devices

## 🏗️ Architecture

### Modular CSS Structure
```
css/
├── main.css          # Main CSS entry point (imports all modules)
├── variables.css     # CSS custom properties and theming
├── reset.css         # Base styles and CSS reset
├── utilities.css     # Utility classes and common components
├── navigation.css    # Navigation bar and mobile menu
├── hero.css          # Hero section styles
├── skills.css        # Skills grid and categories
├── projects.css      # Project cards and grid layout
├── logos.css         # Animated technology logos
├── contact.css       # Contact section and cards
├── modal.css         # Modal system and image preview
└── footer.css        # Footer styles
```

### Modular JavaScript Structure
```
js/
├── app.js           # Main application initialization
├── data.js          # Portfolio data and configuration
├── components.js    # Component factory functions
├── modal.js         # Modal management system
└── navigation.js    # Navigation functionality
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Fonts**: Inter & Poppins (Google Fonts)
- **Icons**: Font Awesome 6.4.0
- **Performance**: Intersection Observer, Lazy Loading
- **Accessibility**: Semantic HTML, ARIA labels, Keyboard navigation

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices with progressive enhancement
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management for modals
- High contrast support
- Reduced motion support
- Screen reader compatibility

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Running Locally

1. **Clone or download** the repository
2. **Navigate** to the project directory:
   ```bash
   cd /path/to/portfolio
   ```
3. **Start a local server** (optional but recommended):
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
4. **Open** your browser and navigate to:
   - `http://localhost:8000` (if using a server)
   - Or simply open `index.html` directly in your browser

## 📂 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── css/                       # Modular CSS files
├── js/                        # Modular JavaScript files
├── logos/                     # Technology logo assets
├── *.png, *.jpg, *.webp      # Project images and assets
├── favicon.ico               # Site favicon
├── README.md                 # This file
├── OPTIMIZATION_REPORT.md    # Detailed optimization report
└── test.html                 # Test page for validation
```

## 🎨 Customization

### Colors & Theming
All colors are defined as CSS custom properties in `css/variables.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... more variables */
}
```

### Content Updates
Portfolio data is centralized in `js/data.js`:
```javascript
const portfolioData = {
  projects: [...],
  skills: [...],
  // ... other data
};
```

### Adding New Projects
1. Add project data to `js/data.js`
2. Add project images to the root directory
3. The project will automatically appear on the site

## 🔧 Development

### CSS Development
- All CSS is modular and organized by component
- Use CSS custom properties for consistent theming
- Follow mobile-first responsive design principles

### JavaScript Development
- Use ES6+ features for modern JavaScript
- Follow component-based architecture
- Maintain separation of concerns

### Performance Optimization
- Images are lazy-loaded using Intersection Observer
- CSS and JS files are minified for production
- Modular architecture enables better caching

## 📈 Performance Features

- **Lazy Loading**: Images load as they enter the viewport
- **Efficient CSS**: Modular CSS reduces unused styles
- **Modern JavaScript**: ES6+ features for better performance
- **Caching Friendly**: Separate CSS/JS files enable better browser caching

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Graceful Degradation**: Progressive enhancement for older browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Armia**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

## 🙏 Acknowledgments

- Google Fonts for typography
- Font Awesome for icons
- Modern CSS techniques and best practices
- Web accessibility guidelines (WCAG)

---

**Note**: This portfolio was built following modern web development best practices with a focus on performance, accessibility, and maintainability.
