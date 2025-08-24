// 3D Hover Effect Manager
class Card3DEffect {
    constructor() {
        this.cards = [];
        this.isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.isMobile = window.innerWidth <= 768;
        this.init();
        this.setupEventListeners();
    }

    init() {
        // Select all cards that should have 3D effect
        const cardSelectors = [
            '.card',
            '.project-card', 
            '.contact-card',
            '.skill-category'
        ];

        cardSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(card => {
                if (!this.isReduced) {
                    this.setupCard(card);
                }
            });
        });

        console.log(`3D hover effect initialized for ${this.cards.length} cards`);
    }

    setupCard(card) {
        // Add 3D class
        card.classList.add('card-3d');
        
        // Store card reference
        this.cards.push(card);

        // Add event listeners
        card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
        card.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, card));
        card.addEventListener('mouseenter', (e) => this.handleMouseEnter(e, card));
    }

    handleMouseMove(e, card) {
        if (this.isReduced) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation values
        // Invert Y for more natural feel
        const rotateX = ((y - centerY) / centerY) * -15; // Max 15 degrees
        const rotateY = ((x - centerX) / centerX) * 15;   // Max 15 degrees
        
        // Reduce intensity on mobile
        const intensity = this.isMobile ? 0.5 : 1;
        const finalRotateX = rotateX * intensity;
        const finalRotateY = rotateY * intensity;
        
        // Apply transform
        card.style.transform = `perspective(1000px) rotateX(${finalRotateX}deg) rotateY(${finalRotateY}deg) translateZ(10px)`;
        
        // Optional: Add subtle cursor-following highlight
        this.updateHighlight(card, x, y, rect.width, rect.height);
    }

    handleMouseEnter(e, card) {
        if (this.isReduced) return;
        
        // Remove any existing reset class
        card.classList.remove('resetting');
        
        // Add slight elevation
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
    }

    handleMouseLeave(e, card) {
        if (this.isReduced) return;
        
        // Add smooth reset animation
        card.classList.add('resetting');
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        
        // Remove highlight
        this.removeHighlight(card);
        
        // Remove reset class after animation
        setTimeout(() => {
            card.classList.remove('resetting');
        }, 500);
    }

    updateHighlight(card, x, y, width, height) {
        // Create or update highlight effect
        let highlight = card.querySelector('.card-3d-highlight');
        
        if (!highlight) {
            highlight = document.createElement('div');
            highlight.className = 'card-3d-highlight';
            highlight.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                transition: opacity 0.2s ease;
                opacity: 0;
            `;
            card.appendChild(highlight);
        }
        
        // Position highlight at cursor
        highlight.style.left = `${x - 50}px`;
        highlight.style.top = `${y - 50}px`;
        highlight.style.opacity = '1';
    }

    removeHighlight(card) {
        const highlight = card.querySelector('.card-3d-highlight');
        if (highlight) {
            highlight.style.opacity = '0';
            setTimeout(() => {
                if (highlight.parentNode) {
                    highlight.parentNode.removeChild(highlight);
                }
            }, 200);
        }
    }

    setupEventListeners() {
        // Handle window resize
        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth <= 768;
        });

        // Handle reduced motion preference changes
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        motionQuery.addEventListener('change', (e) => {
            this.isReduced = e.matches;
            if (this.isReduced) {
                this.disableAllEffects();
            } else {
                this.enableAllEffects();
            }
        });
    }

    disableAllEffects() {
        this.cards.forEach(card => {
            card.style.transform = '';
            card.classList.remove('card-3d');
            this.removeHighlight(card);
        });
    }

    enableAllEffects() {
        this.cards.forEach(card => {
            card.classList.add('card-3d');
        });
    }

    // Method to add 3D effect to dynamically created cards
    addCard(cardElement) {
        if (!this.isReduced && cardElement && !cardElement.classList.contains('card-3d')) {
            this.setupCard(cardElement);
        }
    }

    // Method to remove 3D effect from a card
    removeCard(cardElement) {
        if (cardElement) {
            cardElement.classList.remove('card-3d');
            cardElement.style.transform = '';
            this.removeHighlight(cardElement);
            
            const index = this.cards.indexOf(cardElement);
            if (index > -1) {
                this.cards.splice(index, 1);
            }
        }
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit to ensure all other scripts have initialized
    setTimeout(() => {
        window.card3DEffect = new Card3DEffect();
    }, 100);
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Card3DEffect;
}
