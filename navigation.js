function switchTheme(e) {
    if (e.target.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// This function will be called by setLanguage in main.js
function renderNavigation(lang) {
    const t = translations[lang];
    const header = document.querySelector('header.site-header');
    const footer = document.querySelector('footer.site-footer');

    if (header) {
        const headerHTML = `
            <nav class="site-nav">
                <a href="index.html" class="nav-logo">오늘 저녁 뭐 먹지?</a>
                <ul class="nav-links">
                    <li><a href="index.html">${t.navHome}</a></li>
                    <li><a href="about.html">${t.navAbout}</a></li>
                    <li><a href="contact.html">${t.navContact}</a></li>
                </ul>
                <div class="nav-controls">
                    <div class="theme-switch-wrapper">
                        <label class="theme-switch" for="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <div class="slider round">
                                <span class="light-icon">☀️</span>
                                <span class="dark-icon">🌙</span>
                            </div>
                        </label>
                    </div>
                    <button class="hamburger" aria-label="Toggle menu">☰</button>
                </div>
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

    // Add event listener for the theme switch after rendering
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
        // Set the toggle switch to the correct state based on current theme
        if (document.body.getAttribute('data-theme') === 'dark') {
            toggleSwitch.checked = true;
        }
    }
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
    }
    
    // Set initial language and render navigation
    if (typeof setLanguage === 'function') {
        setLanguage('ko');
    }
});
