// Main application initialization
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.startup());
        } else {
            this.startup();
        }
    }

    startup() {
        try {
            // Initialize all components
            Renderer.init();
            Navigation.init();
            ModalManager.init();
            ImagePreview.init();
            
            // Setup performance optimizations
            this.setupLazyLoading();
            this.setupIntersectionObserver();
            this.setupAnimations();
            
            console.log('Portfolio app initialized successfully');
        } catch (error) {
            console.error('Error initializing portfolio app:', error);
        }
    }

    setupLazyLoading() {
        // Lazy loading for images
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window && images.length > 0) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
            console.log(`Lazy loading setup for ${images.length} images`);
        }
    }

    setupIntersectionObserver() {
        // Animate elements on scroll
        const animatedElements = document.querySelectorAll(
            '.skill-category, .project-card, .contact-card, .card'
        );
        
        if ('IntersectionObserver' in window && animatedElements.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });

            console.log(`Animation observer setup for ${animatedElements.length} elements`);
        }
    }

    setupAnimations() {
        // Add smooth animations for hover effects
        const cards = document.querySelectorAll('.card, .project-card, .skill-category, .contact-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            });
        });

        // Pause logo animation on hover
        const logoContainers = document.querySelectorAll('.logos, .logos-slider');
        logoContainers.forEach(container => {
            container.addEventListener('mouseenter', function() {
                const slides = this.querySelectorAll('.logos-slide, .logos-track');
                slides.forEach(slide => {
                    slide.style.animationPlayState = 'paused';
                });
            });

            container.addEventListener('mouseleave', function() {
                const slides = this.querySelectorAll('.logos-slide, .logos-track');
                slides.forEach(slide => {
                    slide.style.animationPlayState = 'running';
                });
            });
        });
    }
}

// Performance monitoring
class PerformanceMonitor {
    static init() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            if ('performance' in window) {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
                
                // Log performance metrics
                if (performance.timing.domContentLoadedEventEnd) {
                    const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
                    console.log(`DOM Content Loaded: ${domContentLoaded}ms`);
                }
            }
        });

        // Monitor memory usage if available
        if ('memory' in performance) {
            setInterval(() => {
                const memInfo = performance.memory;
                if (memInfo.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
                    console.warn('High memory usage detected:', memInfo.usedJSHeapSize / 1024 / 1024, 'MB');
                }
            }, 30000); // Check every 30 seconds
        }
    }
}

// Utility functions
const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Error handling
window.addEventListener('error', (event) => {
    console.error('JavaScript error:', event.error);
    // In production, you could send this to an error reporting service
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // In production, you could send this to an error reporting service
});

// Initialize the application
const app = new PortfolioApp();
PerformanceMonitor.init();

// Expose necessary functions and objects to global scope
window.ModalManager = ModalManager;
window.ImagePreview = ImagePreview;
window.Utils = Utils;

// Legacy support - keep existing global functions
window.openModal = openModal;
window.closeModal = closeModal;
window.previewImage = previewImage;
window.closeImagePreview = closeImagePreview;
