
var buttonOptions = ["green", "red", "yellow", "blue"];
var gameSequence = []; // Gets emptied when player chooses
var playerSequence = []; // stays the same for computer to beep and player to repeat
var gameOver = true;
var gameLevel = 0;


// intro music
var introMusic = new Audio("sounds/happynes.mp3");
introMusic.preload = 'auto';
introMusic.load();
introMusic.play();

// intro music for mobile browsers
$(".game-title").on("click", function () {
    introMusic.play();
});


// Error Sound 
function errorSound() {
    var errorSound = new Audio("sounds/sounderror.wav");
    errorSound.preload = 'auto';
    errorSound.play(); 
}

// Reset Game
function resetGame() {
    $(".game-status").text("Game Over!");
    $(".start").text("Play Again");
    gameOver = true;
    gameLevel = 0;
    gameSequence = [];
    playerSequence = [];
    setTimeout(() => {
        introMusic.play();
    }, 1000);
}


// Start Button
$(".start").on("click", function() {
    console.log("Game Started");
    startGame()
    errorSound();
    introMusic.pause();
    $(".game-status").text("LEVEL " + gameLevel);
    $(".start").text("Start Game");
});

// The Game
function startGame() {
    gameOver = false;
    gameLevel = 1;

    computerChoice();
    setTimeout(() => {
          computerSequencePlayback();
    }, 2000);
    
    // Have players click remove computerChoice item from array
    // Once the array is empty start next level

        var count = 0;
        // Player Clicks
        $(".green-button").on("click", function() {
            if (playerSequence[count] === "green") {
                gameButtonGreen.beep();
                gameSequence.shift("green");
                gameLevel = gameLevel + 1;

                computerChoice();
                setTimeout(() => {
                    computerSequencePlayback();
                }, 2000);
            } else {
                // game over
                errorSound();
                console.log("game over");
                gameOver = true;
                resetGame()
            }
            
        });

        $(".red-button").on("click", function() {
            if (playerSequence[count] === "red") {
                gameButtonRed.beep();
                gameSequence.shift("red");
                gameLevel = gameLevel + 1;

                computerChoice();
                setTimeout(() => {
                    computerSequencePlayback();
                }, 2000);
            } else {
                // game over
                errorSound();
                console.log("game over");
                gameOver = true;
                resetGame()
            }

        });

        $(".yellow-button").on("click", function() {
            if (playerSequence[count] === "yellow") {
                gameButtonYellow.beep();
                gameSequence.shift("yellow");
                gameLevel = gameLevel + 1;

                computerChoice();
                setTimeout(() => {
                    computerSequencePlayback();
                }, 2000);
            } else {
                // game over
                errorSound();
                console.log("game over");
                gameOver = true;
                resetGame()
            }

        });

        $(".blue-button").on("click", function() {
            if (playerSequence[count] === "blue") {
                gameButtonBlue.beep();
                gameSequence.shift("blue");
                gameLevel = gameLevel + 1;

                computerChoice();
                setTimeout(() => {
                    computerSequencePlayback();
                }, 2000);
            } else {
                // game over
                errorSound();
                console.log("game over");
                gameOver = true;
                resetGame()
            }

        });


}

// Game Logic

// Computer chooses a color
function computerChoice() {
    // Get a random number
    var n = Math.floor(Math.random() * 4);
    // Add random color to game sequence array
    gameSequence.push(buttonOptions[n]);
    playerSequence.push(buttonOptions[n]); // for player to repeat
    console.log("Game Sequence: " + gameSequence);
    console.log("Player Sequence: " + playerSequence);
};

// play back computers sequence (Forloop / Switch Statement / Delay)
function computerSequencePlayback() {
    function log(i){
        // play back Game Sequence with delay
        var theColor = playerSequence[i];
            switch (theColor) {
                case "green": 
                    gameButtonGreen.beep();
                    console.log("playing green");
                    break;
                case "red": 
                    gameButtonRed.beep();
                    console.log("playing red");
                    break;
                case "yellow": 
                    gameButtonYellow.beep();
                    console.log("playing yellow");
                    break;
                case "blue": 
                    gameButtonBlue.beep();
                    console.log("playing blue");
                    break;
                default:
                    break;
            }
        // console.log(gameSequence[i]);
        if (i<playerSequence.length){
        setTimeout(function(){
            i++;
            log(i);
        },1000); // Seconds to delay
        }
    }
    log(0);

};


// Button Object Contstructor
function GameButton(color) {
    this.color = color;
    this.beep = function() {
        // Play sound
        var btnSound = new Audio("sounds/"+ this.color +".mp3");
        btnSound.preload = 'auto';
        btnSound.play();
        // Light up
            $("." + this.color + "-button").css("opacity", "0.8");
        setTimeout(() => {
            $("." + this.color + "-button").css("opacity", "1");
        }, 100);
    };
}

// Game Button Objects
var gameButtonGreen = new GameButton("green");
var gameButtonRed = new GameButton("red");
var gameButtonYellow = new GameButton("yellow");
var gameButtonBlue = new GameButton("blue");










// // Green Button Clicked
// $(".green-button").on("click", function() {
//     // Play sound
//     var greenSound = new Audio("sounds/sound1.mp3");
//     greenSound.play();
//     // Light up
//          $(".green-button").css("opacity", "0.8");
//     setTimeout(() => {
//         $(".green-button").css("opacity", "1");
//     }, 100);
    
// });

// // Red Button Clicked
// $(".red-button").on("click", function() {
//     var redSound = new Audio("sounds/sound2.mp3");
//     redSound.play();
// });

// // Yellow Button Clicked
// $(".yellow-button").on("click", function() {
//     var yellowSound = new Audio("sounds/sound3.mp3");
//     yellowSound.play();
// });

// // Blue Button Clicked
// $(".blue-button").on("click", function() {
//     var blueSound = new Audio("sounds/sound4.mp3");
//     blueSound.play();
// });


