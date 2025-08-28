# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "26 Hillside Laundry", a pickup/delivery laundry service targeting families, salons, Airbnb hosts, small hotels/hostels and homestay owners. The project is a single-page application built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
/
├── index.html          # Main HTML file - single page website
├── css/
│   └── styles.css     # Main CSS file with responsive design
├── js/
│   └── script.js      # JavaScript for mobile navigation and testimonial slider
├── images/            # Image assets (SVG logos, hero image, favicon)
├── robots.txt         # SEO robots file
├── sitemap.xml        # SEO sitemap
└── README.md          # Basic project documentation
```

## Development Commands

This is a static website project. No build tools or test runners are configured.

**Running the project:**
- Open `index.html` directly in a web browser
- Use a local HTTP server like `python -m http.server` or `npx serve .` for testing

**Dependencies:**
- Font Awesome (CDN) - for icons
- Google Fonts (CDN) - Poppins font family

## Architecture Notes

**Technology Stack:**
- Vanilla HTML5 with semantic structure
- CSS3 with CSS custom properties (CSS variables)
- Vanilla JavaScript (no frameworks)
- Mobile-first responsive design

**Key Features:**
- SEO optimized with structured data (JSON-LD)
- WhatsApp integration for contact
- Smooth scroll navigation
- Mobile hamburger menu
- Auto-rotating testimonial slider
- Responsive grid layouts

**CSS Architecture:**
- Uses CSS custom properties for consistent theming
- Blue color scheme (--primary-color: #1a73e8)
- Mobile-first responsive breakpoints (768px, 576px)
- Grid and flexbox layouts
- Hover animations and transitions

**JavaScript Functionality:**
- Mobile navigation toggle
- Smooth scroll for anchor links
- Fixed header on scroll
- Testimonial slider with auto-rotation (5s intervals)
- Click handlers for navigation and testimonial dots

**Contact Integration:**
- WhatsApp integration via wa.me links
- Phone links with tel: protocol
- Structured data for local business SEO

## Common Tasks

- **Add new sections**: Follow existing HTML structure with semantic tags and consistent CSS classes
- **Update styling**: Modify CSS custom properties in `:root` for theme changes
- **Add new JavaScript features**: Follow existing patterns in script.js with DOM ready event listeners
- **Update contact information**: Modify structured data in HTML head and contact section
- **Image optimization**: All images are SVG format for scalability

## Development Notes

- No build process required - direct file editing
- Test responsive design at mobile breakpoints
- Maintain SEO structured data when making changes
- Follow existing naming conventions for CSS classes
- Keep JavaScript vanilla (no framework dependencies)