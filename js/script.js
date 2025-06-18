// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonials = document.querySelectorAll('.testimonial');
    
    // Toggle Mobile Menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a nav link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Fixed header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Testimonial Slider
    if (testimonialDots.length > 0 && testimonials.length > 0) {
        // Show the first testimonial by default
        testimonials[0].style.display = 'block';
        
        // Handle dot clicks
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Hide all testimonials
                testimonials.forEach(testimonial => {
                    testimonial.style.display = 'none';
                });
                
                // Remove active class from all dots
                testimonialDots.forEach(d => {
                    d.classList.remove('active');
                });
                
                // Show the selected testimonial and activate the dot
                testimonials[index].style.display = 'block';
                dot.classList.add('active');
            });
        });
        
        // Auto-rotate testimonials every 5 seconds
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            
            // Hide all testimonials
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            
            // Remove active class from all dots
            testimonialDots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show the next testimonial and activate the dot
            testimonials[currentIndex].style.display = 'block';
            testimonialDots[currentIndex].classList.add('active');
        }, 5000);
    }
});
