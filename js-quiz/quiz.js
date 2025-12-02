const question = '日本で一番高い山はどれですか？';
const answers = [
  '富士山',
  'エベレスト',
  'キリマンジャロ',
  'マッキンリー'
];
const correct = '富士山';
const $button = document.getElementsByTagName('button');
// クイズの問題文、選択肢を定義
let buttonlength = $button.length;
const setupQuiz = () => {
    // 問題文の表示
    document.getElementById('js-question').textContent = question;
    // 選択肢の表示
    let buttonindex = 0;
    while(buttonindex < buttonlength) {
        $button[buttonindex].textContent = answers[buttonindex];
        buttonindex++;
    }
};
setupQuiz();

// ボタンにクリックイベントを設定
const clickHandler = (e) => {
    if(correct === e.target.textContent) {
        window.alert('正解です！');
    } else {
        window.alert('不正解です！');
    }
};

let handlerIndex = 0;
while(handlerIndex < buttonlength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerindex++;
}
