const foodEmojis = {
    '김치찌개': '🥘', '비빔밥': '🥗', '된장찌개': '🍲', '불고기': '🍖', '떡볶이': '🌶️',
    '짜장면': '🍜', '짬뽕': '🍜', '탕수육': '🍖', '마라탕': '🌶️', '양꼬치': '🍢',
    '초밥': '🍣', '라멘': '🍜', '돈까스': '🍘', '우동': '🍜', '회': '🐟',
    '파스타': '🍝', '피자': '🍕', '스테이크': '🥩', '햄버거': '🍔', '샐러드': '🥗',
    '카레': '🍛', '라면': '🍜', '샌드위치': '🥪', '타코': '🌮', '쌀국수': '🍜',
    'Kimchi Jjigae': '🥘', 'Bibimbap': '🥗', 'Doenjang Jjigae': '🍲', 'Bulgogi': '🍖', 'Tteokbokki': '🌶️',
    'Jajangmyeon': '🍜', 'Jjamppong': '🍜', 'Tangsuyuk': '🍖', 'Maratang': '🌶️', 'Yang꼬치': '🍢',
    'Sushi': '🍣', 'Ramen': '🍜', 'Donkkaseu': '🍘', 'Udon': '🍜', 'Hoe': '🐟',
    'Pasta': '🍝', 'Pizza': '🍕', 'Steak': '🥩', 'Hamburger': '🍔', 'Salad': '🥗',
    'Curry': '🍛', 'Ramen': '🍜', 'Sandwich': '🥪', 'Taco': '🌮', 'Pho': '🍜'
};

const translations = {
    ko: {
        title: "오늘 저녁 뭐 먹지?",
        korean: "한식",
        etc: "기타",
        all: "전체",
        recommendation: (food, emoji) => `오늘의 추천 메뉴는 ${emoji} ${food} 입니다!`,
        navHome: "홈",
        navAbout: "사이트 소개",
        navContact: "문의하기",
        footerCopyright: "&copy; 2026 WhatToEat. All Rights Reserved.",
        footerPrivacy: "개인정보처리방침",
        menus: {
            korean: ['김치찌개', '비빔밥', '된장찌개', '불고기', '떡볶이'],
            etc: ['카레', '라면', '샌드위치', '타코', '쌀국수']
        }
    },
    en: {
        title: "What should I eat for dinner?",
        korean: "Korean",
        etc: "Etc",
        all: "All",
        recommendation: (food, emoji) => `Today's recommended menu is ${emoji} ${food}!`,
        navHome: "Home",
        navAbout: "About",
        navContact: "Contact",
        footerCopyright: "&copy; 2026 WhatToEat. All Rights Reserved.",
        footerPrivacy: "Privacy Policy",
        menus: {
            korean: ['Kimchi Jjigae', 'Bibimbap', 'Doenjang Jjigae', 'Bulgogi', 'Tteokbokki'],
            etc: ['Curry', 'Ramen', 'Sandwich', 'Taco', 'Pho']
        }
    }
};

let currentLanguage = 'ko';

function setLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];

    // Update dynamic navigation first
    if (typeof renderNavigation === 'function') {
        renderNavigation(lang);
    }

    // Update page-specific content
    const h1 = document.querySelector('h1');
    if (h1) h1.textContent = t.title;

    const koreanButton = document.querySelector('#korean .button-text');
    if (koreanButton) koreanButton.textContent = t.korean;
    
    const etcButton = document.querySelector('#etc .button-text');
    if (etcButton) etcButton.textContent = t.etc;

    const allButton = document.querySelector('#all .button-text');
    if (allButton) allButton.textContent = t.all;

    const resultDiv = document.getElementById('result');
    if (resultDiv) resultDiv.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('ko');
});

document.getElementById('korean').addEventListener('click', () => recommendFood('korean'));
document.getElementById('etc').addEventListener('click', () => recommendFood('etc'));
document.getElementById('all').addEventListener('click', () => recommendAll());

function recommendFood(category) {
    const resultDiv = document.getElementById('result');
    const menu = translations[currentLanguage].menus[category];
    const randomIndex = Math.floor(Math.random() * menu.length);
    const food = menu[randomIndex];
    const emoji = foodEmojis[food] || '🍲';
    resultDiv.textContent = translations[currentLanguage].recommendation(food, emoji);
}

function recommendAll() {
    const resultDiv = document.getElementById('result');
    const allMenus = Object.values(translations[currentLanguage].menus).flat();
    const randomIndex = Math.floor(Math.random() * allMenus.length);
    const food = allMenus[randomIndex];
    const emoji = foodEmojis[food] || '🍲';
    resultDiv.textContent = translations[currentLanguage].recommendation(food, emoji);
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
