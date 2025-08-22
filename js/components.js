// Component factory functions
const ComponentFactory = {
    // Create skill category component
    createSkillCategory(skill) {
        return `
            <article class="skill-category">
                <h3 class="category-title">
                    ${skill.icon}
                    ${skill.title}
                </h3>
                <p class="category-description">
                    ${skill.description}
                </p>
                <div class="tech-tags">
                    ${skill.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
            </article>
        `;
    },

    // Create project card component
    createProjectCard(project) {
        return `
            <article class="project-card" onclick="ModalManager.openModal('${project.id}')">
                <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </article>
        `;
    },

    // Create contact card component
    createContactCard(contact) {
        return `
            <div class="contact-card">
                <div class="contact-icon">
                    <i class="${contact.icon}"></i>
                </div>
                <div class="contact-info">
                    <h3>${contact.title}</h3>
                    <a href="${contact.link}" class="contact-link" ${contact.link.startsWith('http') ? 'target="_blank"' : ''}>
                        ${contact.value}
                    </a>
                </div>
            </div>
        `;
    },

    // Create logo element
    createLogo(logo) {
        return `<img src="${logo.src}" alt="${logo.name}" loading="lazy">`;
    },

    // Create modal component
    createModal(project) {
        const githubLinks = project.github ? 
            project.github.map(link => `
                <a href="${link.url}" target="_blank" class="modal-link">
                    <i class="fab fa-github"></i>
                    ${link.label}
                </a>
            `).join('') : '';

        const projectLink = project.link ? 
            `<a href="${project.link}" target="_blank" class="modal-link">
                <i class="fas fa-external-link-alt"></i>
                🔗 View Project
            </a>` : '';

        return `
            <div id="${project.id}" class="modal">
                <div class="modal-backdrop" onclick="ModalManager.closeModal('${project.id}')"></div>
                <div class="modal-wrapper">
                    <div class="modal-content">
                        <button class="modal-close" onclick="ModalManager.closeModal('${project.id}')">&times;</button>
                        
                        <h2>${project.title}</h2>
                        <p>${project.detailedDescription}</p>

                        <div class="skills">
                            ${project.tags.map(tag => `<span class="skill">${tag}</span>`).join('')}
                        </div>

                        ${projectLink || githubLinks ? `
                            <div class="modal-links">
                                ${projectLink}
                                ${githubLinks}
                            </div>
                        ` : ''}

                        <div class="modal-images">
                            ${project.images.map(image => `
                                <div>
                                    <img src="${image}" alt="${project.title}" class="modal-card-image" 
                                         onclick="ImagePreview.open('${image}')" loading="lazy">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};

// Render functions
const Renderer = {
    // Render skills section
    renderSkills() {
        const skillsGrid = document.querySelector('.skills-grid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = portfolioData.skills
            .map(skill => ComponentFactory.createSkillCategory(skill))
            .join('');
    },

    // Render projects section
    renderProjects() {
        const projectsGrid = document.querySelector('.projects');
        if (!projectsGrid) return;

        // Keep existing structure but add modern project cards if needed
        console.log('Projects section found, keeping existing structure');
    },

    // Render contact section
    renderContact() {
        const contactGrid = document.querySelector('.contact-grid');
        if (!contactGrid) return;

        console.log('Contact section found, keeping existing structure');
    },

    // Render logos
    renderLogos() {
        const logosSlide = document.querySelectorAll('.logos-slide');
        if (logosSlide.length === 0) return;

        const logoHTML = portfolioData.logos
            .map(logo => ComponentFactory.createLogo(logo))
            .join('');

        logosSlide.forEach(slide => {
            slide.innerHTML = logoHTML;
        });
    },

    // Render modals - keeping existing modals but ensuring they work
    renderModals() {
        console.log('Modals already exist in HTML, ensuring functionality');
    },

    // Initialize all renders
    init() {
        this.renderSkills();
        this.renderProjects();
        this.renderContact();
        this.renderLogos();
        this.renderModals();
        console.log('Components rendered successfully');
    }
};
