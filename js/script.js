
// The gameStart function is called on document load
document.onload = gameStart();


function gameStart(){
    document.player = "X"; // storing x as a permanent variable
    document.winner = null //checks for a winner
    notification("Player " + document.player + ", your turn");// calls the notification function below and display messages
}

//Displays status messages for the game
function notification(msg){
    document.getElementById("message").textContent = msg;
}

//Calls the switchPlayer function just below and prevents players from selecting an already chosen grid
//or making a move when we have a winner
function nextMove(grid){
    if (document.winner != null){
        notification(document.winner + " already won the game");
    }else if (grid.textContent == ""){
        grid.textContent = document.player;
        switchPlayer();
    }else{
        notification("This grid is already in use");
    }
    
}

//Player X and O take turns
function switchPlayer(){
    if (checkWinner(document.player)){
        notification("Congratulations " + document.player + " . You win!")
        document.winner = document.player;
    }else if(document.player == "X"){
        document.player = "O";
        notification("Player " + document.player + ", your turn");
    }else {
        document.player = "X";
        notification("Player " + document.player + ", your turn");
    }
     
}
//*** Determining a winner***
//calls the checkMatch function and checks if the eight different winning possibilities have a match
function checkWinner(move){
    var result = false
    if(
        checkMatch(1, 2, 3, move) || 
        checkMatch(4, 5, 6, move) ||
        checkMatch(7, 8, 9, move) ||
        checkMatch(1, 4, 7, move) ||
        checkMatch(2, 5, 8, move) ||
        checkMatch(3, 6, 9, move) ||
        checkMatch(1, 5, 9, move) ||
        checkMatch(3, 5, 7, move))
     {
        result = true;
    }
    return result;
}

//Calls the getGrid function and check to see if three selected grids match
function checkMatch(a, b, c, move){  //check if for example, row 1,2,3 = x;
    var result = false;
    if (getGrid(a) == move && getGrid(b) == move && getGrid(c) == move){
        result = true;
    }
    return result;
}

//Returns the value of each grid to check for its value
function getGrid(number){
    return document.getElementById("s" + number).textContent ;// each grid has an id of (s1 - s9)
}




