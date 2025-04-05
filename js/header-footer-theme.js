// Theme toggle functionality
function initThemeToggle() {
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('theme');
    
    // Set initial theme
    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Add WhatsApp floating button
    const whatsappButton = document.createElement('a');
    whatsappButton.className = 'whatsapp-button';
    whatsappButton.href = 'https://wa.me/923183607077';
    whatsappButton.setAttribute('aria-label', 'Contact us on WhatsApp');
    whatsappButton.setAttribute('target', '_blank');
    whatsappButton.setAttribute('rel', 'noopener noreferrer');
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappButton);
}

// Header and Footer Components
document.addEventListener('DOMContentLoaded', function() {
    // Header HTML
    const headerHTML = `
    <header>
        <div class="container nav-container">
            <div class="left-section">
                <a href="index.html" class="logo">
                    <i class="fas fa-mosque"></i>
                    <div class="logo-text">Islam<span>Hub</span></div>
                </a>
                <button class="nav-theme-toggle" aria-label="Toggle dark/light mode">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
            <div class="mobile-nav-controls">
                <button class="nav-theme-toggle mobile-only" aria-label="Toggle dark/light mode">
                    <i class="fas fa-moon"></i>
                </button>
                <div class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="courses.html">Courses</a></li>
                    <li><a href="resources/index.html">Resources</a></li>
                    <li><a href="index.html#features">Features</a></li>
                    <li><a href="index.html#testimonials">Testimonials</a></li>
                    <li><a href="index.html#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;

    // Footer HTML
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-about">
                    <div class="footer-logo">
                        <i class="fas fa-mosque"></i>
                        <div class="logo-text">Islam<span>Hub</span></div>
                    </div>
                    <p>Empowering Muslims worldwide with quality Islamic education through flexible, personalized online learning.</p>
                    <div class="social-media">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="resources/index.html">Resources</a></li>
                        <li><a href="index.html#features">Features</a></li>
                        <li><a href="index.html#testimonials">Testimonials</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Courses</h3>
                    <ul class="footer-links">
                        <li><a href="quran-reading.html">Quran Reading</a></li>
                        <li><a href="quran-memorization.html">Quran Memorization</a></li>
                        <li><a href="tafseer.html">Tafseer Classes</a></li>
                        <li><a href="arabic.html">Arabic Language</a></li>
                        <li><a href="#">Islamic Studies</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <div class="footer-contact">
                        <p><i class="fas fa-phone"></i> +1 234 567 8900</p>
                        <p><i class="fas fa-envelope"></i> info@islamhub.org</p>
                        <p><i class="fas fa-globe"></i> www.islamhub.org</p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 IslamHub.org. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // Insert header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize theme toggle button in navbar
    initNavThemeToggle();
    
    // Initialize navbar scroll behavior
    initNavbarScroll();
});

// Initialize theme toggle button in navbar
function initNavThemeToggle() {
    const navThemeToggles = document.querySelectorAll('.nav-theme-toggle');
    
    if (navThemeToggles.length > 0) {
        // Set initial icon based on current theme
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        
        // Update all toggle buttons
        navThemeToggles.forEach(toggle => {
            if (currentTheme === 'dark') {
                toggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                toggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
            
            // Toggle theme when button is clicked
            toggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
                
                if (currentTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                    // Update all toggle buttons
                    navThemeToggles.forEach(btn => {
                        btn.innerHTML = '<i class="fas fa-sun"></i>';
                    });
                } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    // Update all toggle buttons
                    navThemeToggles.forEach(btn => {
                        btn.innerHTML = '<i class="fas fa-moon"></i>';
                    });
                }
            });
        });
    }
}

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

// Add navbar scroll behavior
function initNavbarScroll() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    if (header) {
        // Add transition style to header
        header.style.transition = 'transform 0.3s ease-in-out';
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // If we're scrolling down and not at the top of the page
            if (scrollTop > lastScrollTop && scrollTop > 50) {
                header.style.transform = 'translateY(-100%)';
            } else {
                // If we're scrolling up or at the top
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
} 