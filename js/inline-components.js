// This file contains the HTML for header and footer components
// to be directly injected into pages without using fetch

document.addEventListener('DOMContentLoaded', function() {
    // Header HTML
    const headerHTML = `
    <header>
        <div class="container nav-container">
            <a href="index.html" class="logo">
                <i class="fas fa-mosque"></i>
                <div class="logo-text">Islam<span>Hub</span></div>
            </a>
            <div class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="courses.html">Courses</a></li>
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
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="courses.html">Courses</a></li>
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

    // Initialize mobile menu
    initMobileMenu();
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