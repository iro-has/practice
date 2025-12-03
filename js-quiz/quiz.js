const quiz = [
  {
    question: '日本で一番高い山はどれですか？',
    answers: [
        '富士山',
        'エベレスト',
        'キリマンジャロ',
        'マッキンリー'
    ],
    correct: '富士山'
  },{
    question: '日本で一番多い名字はどれですか？',
    answers: [
        '佐藤',
        '鈴木',
        '高橋',
        '田中'
    ],
    correct: '佐藤'
  },{
    question: '日本の首都はどこですか？',
    answers: [
        '大阪',
        '名古屋',
        '東京',
        '京都'
    ],
    correct: '東京'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
// クイズの問題文、選択肢を定義
let buttonlength = $button.length;
const setupQuiz = () => {
    // 問題文の表示
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    // 選択肢の表示
    let buttonindex = 0;
    while(buttonindex < buttonlength) {
        $button[buttonindex].textContent = quiz[quizIndex].answers[buttonindex];
        buttonindex++;
    }
};
setupQuiz();

// ボタンにクリックイベントを設定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解です！');
        score++;
    } else {
        window.alert('不正解です！');
    }
    quizIndex++;
    if(quizIndex < quizLength) {
       // 問題数があれば実行する。
        setupQuiz();
    } else {
         // 問題数がなければ終了する。
        window.alert('終了！お疲れ様でした！あなたの正解数は' + score + '/' + quizLength + 'です！');
        const win = window.open("https://example.com", "_blank");
        win.close();  // OK

    }
};

let handlerIndex = 0;
while(handlerIndex < buttonlength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
