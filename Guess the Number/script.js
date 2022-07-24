const input = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const numberDiv = document.querySelector('.number');
const msg = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

let randomNumber = Math.round(Math.random() * 21);
console.log(randomNumber);
let score = 20;
let highScore = 0;

checkBtn.addEventListener('click', guess);
btnAgain.addEventListener('click', init);

function guess() {
    let value = input.value;

    if (input.value == randomNumber) {
        numberDiv.textContent = randomNumber;
        numberDiv.style.width = '30rem';
        document.body.style.backgroundColor = 'green';
        msg.textContent = '🎉Correct number!';
        if (score > highScore) {
            highScore = score;
            highScoreEl.textContent = score;
        }
    } else if (value < randomNumber) {
        msg.textContent = '👆Too low!';
        score--;
    } else if (value > randomNumber) {
        msg.textContent = '👇Too high!';
        score--;
    }

    scoreEl.textContent = score;
}

function init() {
    input.value = '';
    msg.textContent = 'Start guessing...';
    document.body.style.backgroundColor = '';
    numberDiv.textContent = '?';
    numberDiv.style.width = '15rem';
    randomNumber = Math.round(Math.random() * 21);
    score = 20;
    scoreEl.textContent = score;
    highScore = 0;
}
