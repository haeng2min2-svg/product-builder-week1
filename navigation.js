document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <nav class="site-nav">
            <a href="index.html" class="nav-logo">오늘 저녁 뭐 먹지?</a>
            <ul class="nav-links">
                <li><a href="index.html">홈</a></li>
                <li><a href="about.html">사이트 소개</a></li>
                <li><a href="contact.html">문의하기</a></li>
            </ul>
        </nav>
    `;

    const footerHTML = `
        <p>&copy; 2026 WhatToEat. All Rights Reserved.</p>
        <p><a href="privacy.html">개인정보처리방침</a></p>
    `;

    const header = document.querySelector('header.site-header');
    const footer = document.querySelector('footer.site-footer');

    if (header) {
        header.innerHTML = headerHTML;
    }
    if (footer) {
        footer.innerHTML = footerHTML;
    }
});
