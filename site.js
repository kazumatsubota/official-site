const gallery = document.getElementById('js-gallery');
let scrollAmount = 0;
const speed = 3; // 1〜2くらいが滑らかです

function initScroll() {
    // 画像の読み込みが遅れる場合があるため、ここで幅を再確認
    if (!gallery || gallery.scrollWidth === 0) {
        // 幅が取れない場合は0.1秒後に再試行
        setTimeout(initScroll, 100);
        return;
    }

    function autoScroll() {
        scrollAmount += speed;
        
        // スライドを実行
        gallery.style.transform = `translateX(-${scrollAmount}px)`;
        
        // gallery.scrollWidth / 2 まで来たらリセット
        if (scrollAmount >= gallery.scrollWidth / 2) {
            scrollAmount = 0;
        }
        
        requestAnimationFrame(autoScroll);
    }

    autoScroll();
}

// ページ内の全リソース（画像含む）が読み込み完了してから実行
window.addEventListener('load', initScroll);