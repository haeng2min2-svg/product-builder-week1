// This function will be called by setLanguage in main.js
function renderNavigation(lang) {
    const t = translations[lang];
    const header = document.querySelector('header.site-header');
    const footer = document.querySelector('footer.site-footer');

    if (header) {
        const headerHTML = `
            <nav class="site-nav">
                <a href="index.html" class="nav-logo">오늘 저녁 뭐 먹지?</a>
                <button class="hamburger" aria-label="Toggle menu">☰</button>
                <ul class="nav-links">
                    <li><a href="index.html">${t.navHome}</a></li>
                    <li><a href="about.html">${t.navAbout}</a></li>
                    <li><a href="contact.html">${t.navContact}</a></li>
                </ul>
            </nav>
        `;
        header.innerHTML = headerHTML;
    }

    if (footer) {
        const footerHTML = `
            <p>${t.footerCopyright}</p>
            <p><a href="privacy.html">${t.footerPrivacy}</a></p>
        `;
        footer.innerHTML = footerHTML;
    }
    
    // Add event listener for the hamburger menu after rendering
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language and render navigation
    if (typeof setLanguage === 'function') {
        setLanguage('ko');
    }
});
