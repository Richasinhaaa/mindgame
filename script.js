let wordList = {
    easy: [
        { word: "cat", hint: "A small domestic animal" },
        { word: "sun", hint: "The star at the center of our solar system" },
        // Add more words...
    ],
    intermediate: [
        { word: "rocket", hint: "A space vehicle" },
        { word: "planet", hint: "A celestial body orbiting the sun" },
        // Add more words...
    ],
    hard: [
        { word: "cryptocurrency", hint: "A digital currency" },
        { word: "photosynthesis", hint: "A process plants use to make food" },
        // Add more words...
    ]
};

let level, word, corrects, incorrects, maxGuesses;

function startGame(selectedLevel) {
    document.querySelector('.game-wrapper').style.display = 'block';
    level = selectedLevel;
    resetGame();
}

function resetGame() {
    let randomWordObj = wordList[level][Math.floor(Math.random() * wordList[level].length)];
    word = randomWordObj.word;
    document.querySelector('.hint span').innerText = randomWordObj.hint;
    maxGuesses = 6;
    corrects = [];
    incorrects = [];
    updateUI();
}

function updateUI() {
    document.querySelector('.guess-left span').innerText = maxGuesses;
    document.querySelector('.wrong-letters span').innerText = incorrects.join(", ");
    // Logic to display inputs for each letter...
}

function handleKeyPress(e) {
    // Logic for handling user input
    
        let key = e.key.toLowerCase();
        
        // Check if it's a valid alphabetical letter
        if (!/^[a-z]$/.test(key)) {
            return; // Ignore non-letter inputs
        }
    
        // Check if the letter is already guessed
        if (corrects.includes(key) || incorrects.includes(key)) {
            return; // Ignore if already guessed
        }
    
        // Check if the letter is in the word
        if (word.includes(key)) {
            // Add to correct guesses
            corrects.push(key);
        } else {
            // Add to incorrect guesses
            incorrects.push(key);
            maxGuesses--;
        }
    
        // Update the UI with the new state
        updateUI();
    if (corrects.length === word.length) {
        alert("Congrats! Keep going!");
        // Move to next level or reset game logic
    } else if (maxGuesses < 1) {
        alert("Game over! Try again.");
    }
}

// Event Listeners
document.querySelector('.reset-btn').addEventListener('click', resetGame);
document.addEventListener('keydown', handleKeyPress);
