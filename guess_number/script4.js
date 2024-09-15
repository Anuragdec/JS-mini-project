
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}




/** 
let randomnumber = parseInt(Math.random() * 100 + 1);
console.log(randomnumber);

const submit = document.querySelector('#submit')
const userinput = document.querySelector('guessfield')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.remaining')
const lowOrHi = document.querySelector('.lowhigh')
const startOver = document.querySelector('.resultparser')

const p = document.createElement('p')

let prevguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please write correct input')
    }
    else if (guess < 1) {
        alert('please write correct input')
    }
    else if (guess > 100) {
        alert('please write correct input')
    }
    else {
        prevguess.push(guess)
        if (guess === 11) {
            displayguess(guess)
            displaymessage(`GAME OVER`)
            endgame()

        } else {
            displayguess(guess)
            checkguess(guess)

        }
    }
}
function checkguess(guess) {
    if (guess === randomnumber) {
        displayguess(`you guess it right ${guess}`)
    }
    else if (guess < randomnumber) {
        displayguess(`number is small than random ${guess}`)
    } else (guess > randomnumber)
    {
        displayguess(`number is greater than the random  ${guess}`)
    }
}
function displayguess(guess) {
    userinput.value = ' '
    guesses.innerHTML = `${guess}  `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`

}

function displaymessage(message) {
    lowOrHi.innerHTML = <h1>${message}</h1>
}

