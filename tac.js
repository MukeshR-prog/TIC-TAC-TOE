
let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");
let gameOver = false;

function move(index) {
    if (!gameOver && !cells[index].textContent) {
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            document.getElementById("message").textContent = "PLAYER \"" + currentPlayer + "\" WON THE GAME";
            gameOver = true;
        } else if (checkDraw()) {
            document.getElementById("message").textContent = "It's a draw..!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== "");
}


function restartGame() {
    cells.forEach(cell => {
        cell.textContent = "";
    });
    document.getElementById("message").textContent = "";
    currentPlayer = "X";
    gameOver = false;
}