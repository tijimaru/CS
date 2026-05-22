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

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const clickableImages = document.querySelectorAll(".clickable-img");
    const closeBtn = document.querySelector(".close-btn");

    // すべての対象画像にクリック（タップ）イベントを設定
    clickableImages.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src; // クリックした画像のURLを拡大用画像にコピー
            lightbox.classList.add("active"); // 表示用のクラスを付与
        });
    });

    // ×ボタンを押したら閉じる
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    // 背景の黒い部分を押しても閉じるようにする（スマホで閉じやすくなって親切）
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove("active");
        }
    });
});
