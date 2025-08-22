// Modal management system
const ModalManager = {
    openModal(projectId) {
        const modal = document.getElementById(projectId);
        if (!modal) {
            console.warn(`Modal with ID ${projectId} not found`);
            return;
        }

        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        document.body.classList.add('modal-open');
        
        // Focus management for accessibility
        const closeButton = modal.querySelector('.modal-close, .close');
        if (closeButton) closeButton.focus();

        // Add escape key listener
        document.addEventListener('keydown', this.handleEscapeKey);
    },

    closeModal(projectId) {
        const modal = document.getElementById(projectId);
        if (!modal) {
            console.warn(`Modal with ID ${projectId} not found`);
            return;
        }

        modal.style.display = "none";
        document.body.classList.remove('modal-open');
        
        // Remove escape key listener
        document.removeEventListener('keydown', this.handleEscapeKey);
    },

    handleEscapeKey(event) {
        if (event.key === 'Escape') {
            const activeModals = document.querySelectorAll('.modal[style*="flex"]');
            activeModals.forEach(modal => {
                const projectId = modal.id;
                ModalManager.closeModal(projectId);
            });
        }
    },

    // Close modal when clicking backdrop
    init() {
        // Handle clicks on modal backdrops
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('modal') || 
                event.target.classList.contains('modal-backdrop')) {
                const modal = event.target.closest('.modal');
                if (modal) {
                    this.closeModal(modal.id);
                }
            }
        });

        console.log('Modal Manager initialized');
    }
};

// Image preview system
const ImagePreview = {
    open(imageSrc) {
        const modal = document.getElementById('imagePreviewModal');
        const image = document.getElementById('previewImage');
        
        if (!modal || !image) {
            console.warn('Image preview modal not found');
            return;
        }

        image.src = imageSrc;
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        document.body.classList.add('modal-open');

        // Add escape key listener
        document.addEventListener('keydown', this.handleEscapeKey);
    },

    close() {
        const modal = document.getElementById('imagePreviewModal');
        if (!modal) return;

        modal.style.display = "none";
        document.body.classList.remove('modal-open');
        
        // Remove escape key listener
        document.removeEventListener('keydown', this.handleEscapeKey);
    },

    handleEscapeKey(event) {
        if (event.key === 'Escape') {
            ImagePreview.close();
        }
    },

    // Close when clicking backdrop
    init() {
        document.addEventListener('click', (event) => {
            if (event.target.id === 'imagePreviewModal') {
                this.close();
            }
        });

        console.log('Image Preview initialized');
    }
};

// Legacy function support for existing onclick handlers
function openModal(id) {
    ModalManager.openModal(id);
}

function closeModal(id) {
    ModalManager.closeModal(id);
}

function previewImage(src) {
    ImagePreview.open(src);
}

function closeImagePreview() {
    ImagePreview.close();
}
