// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
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
        nav.classList.remove('active');
        body.classList.remove('menu-open');
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
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    });

    // Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation
            const formData = new FormData(this);
            const isValid = validateForm(formData);
            
            if (isValid) {
                alert('Thank you for your message. We will get back to you soon!');
                this.reset();
            }
        });
    }

    // Form validation helper
    function validateForm(formData) {
        let isValid = true;
        const email = formData.get('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            isValid = false;
            alert('Please enter a valid email address');
        }

        return isValid;
    }
});
