// Load header and footer components
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('components/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load header');
                }
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
                
                // Initialize mobile menu after header is loaded
                initMobileMenu();
            })
            .catch(error => {
                console.error('Error loading header:', error);
                headerPlaceholder.innerHTML = '<div class="container"><p>Error loading header. Please refresh the page.</p></div>';
            });
    }

    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('components/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load footer');
                }
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                footerPlaceholder.innerHTML = '<div class="container"><p>Error loading footer. Please refresh the page.</p></div>';
            });
    }
});

// Initialize mobile menu functionality
function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Add overlay for mobile menu if it doesn't exist
        if (!document.querySelector('.mobile-menu-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('active')) {
                if (!nav.contains(e.target) && !mobileBtn.contains(e.target)) {
                    nav.classList.remove('active');
                    body.classList.remove('menu-open');
                }
            }
        });
    }
} 