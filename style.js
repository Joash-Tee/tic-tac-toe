let playerOne = "X";
let playerTwo = "O";
let currentPlayer = playerOne;
$(document).ready(() => {
    // Variable to store current player
    let currentPlayer = "X";
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    // Function to check if the board space is empty
    function emptySpace(space) {
        if ($(`#${space} `).html() == "") {
            return true;
        } else {
            return false;
        }
    }

    // Function to change the current game player
    function changePlayer() {
        if (currentPlayer == playerOne) {
            currentPlayer = playerTwo;
        } else {
            currentPlayer = playerOne;
        }

    }
    function checkWin() {
        let winner = false
        winningCombos.forEach(function (e) {
            if (boxes[e[0]].innerhtml == currentPlayer &&
                boxes[e[1]].innerhtml == currentPlayer &&
                boxes[e[2]].innerhtml == currentPlayer) {
                winner = true
            }
            return winner
        })
    }
    let boxes = $('.box');
    // Select the board and add event listener
    $("#board").on("click", ".box", event => {
        // Capture the event.target
        let boxIndex = event.target.id;
        // Perform check to see if space is empty
        if (emptySpace(boxIndex)) {
            // Set html to X or O
            $(`#${boxIndex} `).html(currentPlayer);
            // Change to next player
            if (checkWin()) {
                alert('You have won the game!')
            } else if (!boxes === " ") {
                alert('Draw game!')
            } else {
                changePlayer();
            }

        } else {
            alert("This space has already been chosen!");
        }
    });
    console.log(boxes)


});