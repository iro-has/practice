(()=>{
    // ここに命令文を書く
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const activeClass = 'is-active';
    //初期化
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    //タブクリック時の処理
    const handleClick = (e) => {
        e.preventDefault();

        //クリックされたnavを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        //contentのアクティブ切り替え
        let index = 0;
        while(index < $nav.length){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(activeClass);
            index++;
        }

        //navのアクティブ切り替え
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(activeClass);

    };

    //タブクリックイベント
    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();