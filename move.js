// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function () {

    // id="scrollToTopBtn"の要素を取得
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // ボタンがクリックされたときの処理
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0, // ページの最上部へ
            behavior: 'smooth' // スムーズなスクロールを実行
        });
    });

});
