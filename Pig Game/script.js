// DOM Elements
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const secondPlayer = document.querySelector('.player--1');
const firstPlayer = document.querySelector('.player--0');
const totalScoreFirstPlayer = document.querySelector('#score--0');
const totalScoreSecondPlayer = document.querySelector('#score--1');

// Resetting all the values
totalScoreFirstPlayer.textContent = 0;
totalScoreSecondPlayer.textContent = 0;
dice.style.display = 'none';
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

// Adding events to all the buttons
rollBtn.addEventListener('click', onRoll);
holdBtn.addEventListener('click', onHold);
newBtn.addEventListener('click', onNew);

// When the user rolls the dice
function onRoll() {
    if (isPlaying) {
        dice.style.display = '';
        let randomDice = Math.ceil(Math.random() * 6);
        dice.src = `dice-${randomDice}.png`;
        if (randomDice != 1) {
            currentScore += randomDice;
            document.querySelector(`#current--${activePlayer}`).textContent =
                currentScore;
        } else {
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
            firstPlayer.classList.toggle('player--active');
            secondPlayer.classList.toggle('player--active');
        }
    }
}

// When the user holds the current score
function onHold() {
    if (isPlaying) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent =
            scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            isPlaying = false;
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            dice.style.display = 'none';
        } else {
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
            firstPlayer.classList.toggle('player--active');
            secondPlayer.classList.toggle('player--active');
        }
    }
}

// When the user stars a new game
function onNew() {
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--winner');
    dice.style.display = 'none';
    firstPlayer.classList.add('player--active');
    secondPlayer.classList.remove('player--active');
    totalScoreFirstPlayer.textContent = 0;
    totalScoreSecondPlayer.textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;
}
