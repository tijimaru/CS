//JavaScript
console.log("hello world");

$(function () {
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        slideMargin: 0,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        pager: false,
        controls: false,
        infiniteLoop: true,
        auto: true,
        speed: 500,
        pause: 3000,
    });
});

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a'); // メニュー内のリンク全部

// ハンバーガーアイコンのクリックでメニュー開閉
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// 各リンクをクリックしたときにメニューを閉じる
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});
// スクロールでメニューを閉じる
window.addEventListener('scroll', () => {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
    }
});
