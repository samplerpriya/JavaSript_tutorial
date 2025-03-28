let randomNumber = console.log(parseInt(Math.random() * 100 + 1 ));
// parseInt convert it into Integer

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess =  (userInput.value)
        console.log(guess);
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter the valid number")
    }
    else if(guess < 1){
        alert ("Please enter the number more than 1 ")
    }
    else if (guess > 1){
        alert("Please enter the number less than 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage('Game Over. Random Number was ${randomNumber}')
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage('Yes Guessed it right')
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Number is too low')
    }
    else if (guess > randomNumber){
        displayMessage('Number is too high')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}   `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(Message) {
    lowOrHi.innerHTML = `<h2>${Message}</h2>`
}


function endGame() {
    userInput.value= ''
    userInput.setAttribute('disabled', '')
    playGame.classList('button')
    playGame.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = (parseInt(Math.random() * 100 + 1 ));
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
