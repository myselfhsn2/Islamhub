// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    }

    // Add overlay for mobile menu
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
        if (nav) {
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav && nav.classList.contains('active')) {
            if (!nav.contains(e.target) && !mobileBtn.contains(e.target)) {
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            }
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Add smooth scroll animation
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // If on mobile, close menu after clicking
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    body.classList.remove('menu-open');
                }
            }
        });
    });

    // Form validation and handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            const isValid = validateForm(this);
            
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message. We will get back to you soon!';
                
                // Insert after form
                contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
                
                // Slide up the form with animation
                contactForm.style.transition = 'all 0.5s ease';
                contactForm.style.opacity = '0';
                contactForm.style.maxHeight = '0';
                contactForm.style.overflow = 'hidden';
                
                // Reset form
                this.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.opacity = '0';
                    setTimeout(() => {
                        successMessage.remove();
                        contactForm.style.opacity = '1';
                        contactForm.style.maxHeight = 'none';
                    }, 500);
                }, 5000);
            }
        });
    }

    // Form validation helper
    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                showError(input, 'This field is required');
            } else if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    showError(input, 'Please enter a valid email address');
                } else {
                    removeError(input);
                }
            } else {
                removeError(input);
            }
        });
        
        return isValid;
    }
    
    function showError(input, message) {
        // Remove any existing error
        removeError(input);
        
        // Add error class to input
        input.classList.add('error');
        
        // Create error message
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        
        // Insert error after input
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    
    function removeError(input) {
        input.classList.remove('error');
        const error = input.parentNode.querySelector('.error-message');
        if (error) {
            error.remove();
        }
    }
    
    // Accordion functionality for curriculum
    const curriculumHeaders = document.querySelectorAll('.curriculum-header');
    if (curriculumHeaders.length > 0) {
        curriculumHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                content.classList.toggle('active');
                
                const icon = this.querySelector('i');
                if (icon) {
                    if (content.classList.contains('active')) {
                        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
                    } else {
                        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
                    }
                }
            });
        });
    }

    // Intersection Observer for animations
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.feature-card, .course-card, .section-title, .why-choose-content, .testimonial-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(element);
        });
        
        document.addEventListener('scroll', () => {
            animatedElements.forEach(element => {
                if (element.classList.contains('animated')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }, { passive: true });
    }

    // Handle pricing plan selection and price range slider
    const pricingPlan = document.getElementById('pricingPlan');
    const priceRangeContainer = document.getElementById('priceRangeContainer');
    const priceRange = document.getElementById('priceRange');
    const priceDisplay = document.getElementById('priceDisplay');

    if (pricingPlan && priceRangeContainer && priceRange && priceDisplay) {
        // Handle pricing plan changes
        pricingPlan.addEventListener('change', function() {
            if (this.value === 'flexible') {
                priceRangeContainer.classList.add('active');
            } else {
                priceRangeContainer.classList.remove('active');
            }
        });

        // Handle price range changes
        priceRange.addEventListener('input', function() {
            priceDisplay.textContent = this.value;
        });

        // Handle form submission
        const trialForm = document.getElementById('trialForm');
        if (trialForm) {
            trialForm.addEventListener('submit', function(e) {
                const selectedPlan = pricingPlan.value;
                if (selectedPlan === 'flexible') {
                    const customPrice = priceRange.value;
                    // Add custom price to form data
                    const priceInput = document.createElement('input');
                    priceInput.type = 'hidden';
                    priceInput.name = 'selected_price';
                    priceInput.value = customPrice;
                    this.appendChild(priceInput);
                }
            });
        }
    }
});
