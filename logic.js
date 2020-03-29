let checkBox = document.getElementsByClassName("checkBox");

// -1 means empty spot && 0 means computer spot && 1 means user spot
let gameBox = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];

// Level difficulty: variable is used on updateTable function
let difficulty = 12

let easy = document.getElementById("easy");
let med = document.getElementById("med");
let hard = document.getElementById("hard");
let reset = document.getElementById("reset");
let title = document.getElementById("forMessage");

// Auto starts on med
med.style.textDecoration = "underline";

// All 3 even listeners changes the difficulty level
easy.addEventListener("click", () => {
    if (changeAble){
        difficulty = 6;
        easy.style.textDecoration = "underline";
        med.style.textDecoration = "none";
        hard.style.textDecoration = "none";
    } else {
        sendMessage("Please reset game to change difficulty");
    }
})
med.addEventListener("click", () => {
    if (changeAble){
        difficulty = 12;
        easy.style.textDecoration = "none";
        med.style.textDecoration = "underline";
        hard.style.textDecoration = "none";
    } else {
        sendMessage("Please reset game to change difficulty");
    }
})
hard.addEventListener("click", () => {
    if (changeAble){
        difficulty = 18;
        easy.style.textDecoration = "none";
        med.style.textDecoration = "none";
        hard.style.textDecoration = "underline";
    } else {
        sendMessage("Please reset game to change difficulty");
    }
})

let turnsTaken = 0;
let winnerExist = false;
let changeAble = true;

for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("click", () => {
        updateGameBox(i, true);
    })
}

function updateGameBox(num, isUser) {
    if (num === 0 || num === 1 || num === 2) {
        // deals with the first array in gameBox[0]
        switchArray(0, num, 0, isUser)
    } else if (num === 3 || num === 4 || num === 5) {
        // deals with the second array in gameBox[1]
        switchArray(1, num, 3, isUser)
    } else {
        // deals with the final array
        switchArray(2, num, 6, isUser)
    }
}

function switchArray(index, num, diff, isUser) {
    let spot = gameBox[index][num - diff];
    let numAction = isUser ? 1 : 0;

    if (spot === -1) {
        gameBox[index][num - diff] = numAction;
        console.log("Added here");
        turnsTaken++;
        updateTable(num, isUser);
    } 
    if (spot !== -1 && isUser) {
        sendMessage("Spot taken")
    }
}

function updateTable(num, user) {

    if (!winnerExist){
        changeAble = false;
        let str = user ? "X" : "O";
        document.getElementsByClassName("checkBox")[num].innerText = str;
    
        if ( turnsTaken > 8 ){
            title.innerText = "No more spots, please reset game"
        } else {
            let isWinner = checkWinner();
        
            if (!isWinner[0]){
                if (user){
                    let randomNess = Math.floor(Math.random() * 21);
                    if (randomNess < difficulty){
                        checkUsersOptions();
                    } else {
                        randomSpot()
                    }
                } else {
                    updateGameBox(num, false);
                }
            } else{
                winnerExist = true
                if (isWinner[1]){
                    title.innerText = "You won"
                } else {
                    title.innerText = "You lost";
                }
            }
        }
    } else {
        sendMessage("Winner exist, please reset game")
    }
}

function checkWinner() {
    
    let winner = false;
    let isUser = null;

    let firstRow = [0, 0];
    let secondRow = [0, 0];
    let thirdRow = [0, 0];
    let firstColumn = [0, 0];
    let secondColumn = [0, 0];
    let thirdColumn = [0, 0];
    let leftDown = [0, 0];
    let rightDown = [0, 0];

    for (let i = 0; i < 3; i++) {

        let j = 2 - i;

        if ( gameBox[0][i] === 1 || gameBox[0][i] === 0 ){
            if (gameBox[0][i] === 1){
                firstRow[0]++
            } else {
                firstRow[1]++
            }

            if (firstRow[0] === 3){
                winner = true;
                winnerExist = true;
                isUser = true;
            } else if (firstRow[1] === 3) {
                winner = true;
                winnerExist = true;
                isUser = false;
            }
        }
        if ( gameBox[1][i] === 1 || gameBox[1][i] === 0 ){
            if (gameBox[1][i] === 1){
                secondRow[0]++
            } else {
                secondRow[1]++
            }

            if (secondRow[0] === 3){
                winner = true;
                winnerExist = true;
                isUser = true;
            } else if (secondRow[1] === 3) {
                winner = true;
                winnerExist = true;
                isUser = false;
            }
        }
        if ( gameBox[2][i] === 1 || gameBox[2][i] === 0 ){
            if (gameBox[2][i] === 1){
                thirdRow[0]++
            } else {
                thirdRow[1]++
            }

            if (thirdRow[0] === 3){
                winner = true;
                winnerExist = true;
                isUser = true;
            } else if (thirdRow[1] === 3) {
                winner = true;
                winnerExist = true;
                isUser = false;
            }
        }
        if ( gameBox[i][0] === 1 || gameBox[i][0] === 0 ){
            if (gameBox[i][0] === 1){
                firstColumn[0]++
            } else {
                firstColumn[1]++
            }

            if (firstColumn[0] === 3){
                winner = true;
                winnerExist = true;
                isUser = true;
            } else if (firstColumn[1] === 3) {
                winner = true;
                winnerExist = true;
                isUser = false;
            }
        }
        if ( gameBox[i][1] === 1 || gameBox[i][1] === 0 ){
            if (gameBox[i][1] === 1){
                secondColumn[0]++
            } else {
                secondColumn[1]++
            }

            if (secondColumn[0] === 3){
                winner = true;
                winnerExist = true;
                isUser = true;
            } else if (secondColumn[1] === 3) {
                winner = true;
                winnerExist = true;
                isUser = false;
            }
        }
        if ( gameBox[i][2] === 1 || gameBox[i][2] === 0 ){
            if (gameBox[i][2] === 1){
                thirdColumn[0]++
            } else {
                thirdColumn[1]++
            }

            if (thirdColumn[0] === 3){
                winner = true;
                winnerExist = true;
                isUser = true;
            } else if (thirdColumn[1] === 3) {
                winner = true;
                winnerExist = true;
                isUser = false;
            }
        }
        if ( gameBox[i][i] === 1 || gameBox[i][i] === 0 ){
            if (gameBox[i][i] === 1){
                leftDown[0]++
            } else {
                leftDown[1]++
            }

            if (leftDown[0] === 3){
                winner = true;
                winnerExist = true;
                isUser = true;
            } else if (leftDown[1] === 3) {
                winner = true;
                winnerExist = true;
                isUser = false;
            }
        }
        if ( gameBox[j][i] === 1 || gameBox[j][i] === 0 ){
            if (gameBox[j][i] === 1){
                rightDown[0]++
            } else {
                rightDown[1]++
            }

            if (rightDown[0] === 3){
                winner = true;
                winnerExist = true;
                isUser = true;
            } else if (rightDown[1] === 3) {
                winner = true;
                winnerExist = true;
                isUser = false;
            }
        }
    }

    let sendBack = [winner, isUser];
    return sendBack;
}

function randomSpot() {
    var run = true;

    console.log("Random")

    while (run) {
        let whichArray = Math.floor(Math.random() * 3)
        let arraySpot = Math.floor(Math.random() * 3)
        let attempt = gameBox[whichArray][arraySpot]

        if (attempt === -1) {
            run = false;
            firstTimeComputer = false;
            gameBox[whichArray][arraySpot] = 0;
            let num = (whichArray * 3) + arraySpot;
            console.log("Added here");
            turnsTaken++;
            updateTable(num, false)
        }
    }
}

function checkUsersOptions() {

    let exist = false;

    let firstRow = [0, -1];
    let secondRow = [0, -1];
    let thirdRow = [0, -1];
    let firstColumn = [0, -1];
    let secondColumn = [0, -1];
    let thirdColumn = [0, -1];
    let leftDown = [0, -1];
    let rightDown = [0, -1];

    for (let i = 0; i < 3; i++) {

        let j = 2 - i;

        if ( gameBox[0][i] === 1 || gameBox[0][i] === -1 ){

            if (gameBox[0][i] === 1){
                firstRow[0]++
            } else if (gameBox[0][i] === -1) {
                firstRow[1] = i;
            }

            if (firstRow[0] === 2 && firstRow[1] !== -1){
                let num = firstRow[1];
                exist = true;
                console.log(true)
                updateTable(num, false);
                break;
            }

        }
        if ( gameBox[1][i] === 1 || gameBox[1][i] === -1 ){
            if (gameBox[1][i] === 1){
                secondRow[0]++
            } else {
                secondRow[1] = i;
            }

            if (secondRow[0] === 2 && secondRow[1] !== -1){
                let num = secondRow[1] + 3;
                exist = true;
                console.log(true);
                updateTable(num, false);
                break;
            }

        }
        if ( gameBox[2][i] === 1 || gameBox[2][i] === -1 ){
            if (gameBox[2][i] === 1){
                thirdRow[0]++
            } else {
                thirdRow[1] = i;
            }

            if (thirdRow[0] === 2 && thirdRow[1] !== -1){
                let num = thirdRow[1] + 6;
                exist = true;
                console.log(true);
                updateTable(num, false);
                break;
            }

        }
        if ( gameBox[i][0] === 1 || gameBox[i][0] === -1 ){
            if (gameBox[i][0] === 1){
                firstColumn[0]++
            } else {
                firstColumn[1] = i;
            }

            if (firstColumn[0] === 2 && firstColumn[1] !== -1){
                let num = firstColumn[1] * 3;
                exist = true;
                console.log(true);
                updateTable(num, false);
                break;
            }

        }
        if ( gameBox[i][1] === 1 || gameBox[i][1] === -1 ){
            if (gameBox[i][1] === 1){
                secondColumn[0]++
            } else {
                secondColumn[1] = i;
            }

            if (secondColumn[0] === 2 && secondColumn[1] !== -1){
                let num = (secondColumn[1] * 3) + 1;
                exist = true;
                console.log(true);
                updateTable(num, false);
                break;
            }

        }
        if ( gameBox[i][2] === 1 || gameBox[i][2] === -1 ){
            if (gameBox[i][2] === 1){
                thirdColumn[0]++
            } else {
                thirdColumn[1] = i;
            }

            if (thirdColumn[0] === 2 && thirdColumn[1] !== -1){
                let num = (thirdColumn[1] * 3) + 2;
                exist = true;
                console.log(true);
                updateTable(num, false);
                break;
            }

        }
        if ( gameBox[i][i] === 1 || gameBox[i][i] === -1 ){

            if (gameBox[i][i] === 1){
                leftDown[0]++
            } else {
                leftDown[1] = i;
            }

            if (leftDown[0] === 2 && leftDown[1] !== -1){
                let num = (leftDown[1] * 3) + leftDown[1];
                exist = true;
                console.log(true);
                updateTable(num, false);
                break;
            }

        }
        if ( gameBox[j][i] === 1 || gameBox[j][i] === -1 ){
            if (gameBox[j][i] === 1){
                rightDown[0]++
            } else {
                rightDown[1] = j;
            }

            if (rightDown[0] === 2 && rightDown[1] !== -1){
                let num = (rightDown[1] * 2) + 2;
                exist = true;
                console.log(true);
                updateTable(num, false);
                break;
            }

        }
    }

    if (!exist){
        randomSpot();
    }
}

function sendMessage(str) {

    let theCount = 0;
    title.innerText = str;

    let inta = setInterval(() => {

        theCount++

        if ( theCount === 5 ){
            clearInterval(inta)
            title.innerText = ""
        }
    }, 500)

}

reset.addEventListener("click", () => {
    resetAll();
})

function resetAll() {
    gameBox = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
    turnsTaken = 0;
    winnerExist = false;
    changeAble = true;
    title.innerText = "";

    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].innerText = ".";
    }
}