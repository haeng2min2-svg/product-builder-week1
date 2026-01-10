const translations = {
    ko: {
        title: "오늘 저녁 뭐 먹지?",
        korean: "한식",
        etc: "기타",
        all: "전체",
        recommendation: (food) => `오늘의 추천 메뉴는 ${food} 입니다!`,
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
        recommendation: (food) => `Today's recommended menu is ${food}!`,
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
    document.querySelector('h1').textContent = t.title;
    document.querySelector('#korean .button-text').textContent = t.korean;
    document.querySelector('#etc .button-text').textContent = t.etc;
    document.querySelector('#all .button-text').textContent = t.all;
    document.getElementById('result').textContent = '';
}

document.getElementById('korean').addEventListener('click', () => recommendFood('korean'));
document.getElementById('etc').addEventListener('click', () => recommendFood('etc'));
document.getElementById('all').addEventListener('click', () => recommendAll());

function recommendFood(category) {
    const resultDiv = document.getElementById('result');
    const menu = translations[currentLanguage].menus[category];
    const randomIndex = Math.floor(Math.random() * menu.length);
    resultDiv.textContent = translations[currentLanguage].recommendation(menu[randomIndex]);
}

function recommendAll() {
    const resultDiv = document.getElementById('result');
    const allMenus = Object.values(translations[currentLanguage].menus).flat();
    const randomIndex = Math.floor(Math.random() * allMenus.length);
    resultDiv.textContent = translations[currentLanguage].recommendation(allMenus[randomIndex]);
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

document.addEventListener('DOMContentLoaded', () => setLanguage('ko'));
