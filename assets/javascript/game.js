
// be able to reset itself if the user wins or loses
// global variables
var num = Math.floor(Math.random() * 200) + 50;
var playerScore = 0;
var diamond = Math.floor(Math.random() * 50) + 19;
var sapphire = Math.floor(Math.random() * 10) + 1;
var pinkSapphire = Math.floor(Math.random() * 30) + 10;
var ruby = Math.floor(Math.random() * 20) + 1;
var wins = 0;
var losses = 0;
console.log(num, "Computer guess");

//assigns the random number generator to the number to guess ID


 //function to have the game reset so it can be played again
 function play() {
    $("#number-to-guess").html(num);
    num = Math.floor(Math.random() * 200) + 50;
    diamond = Math.floor(Math.random() * 50) + 19;
    sapphire = Math.floor(Math.random() * 10) + 1;
    pinkSapphire = Math.floor(Math.random() * 30) + 10;
    ruby = Math.floor(Math.random() * 20) + 1;
    playerScore = 0
    $("#playerGuess").html(playerScore);
    console.log(num, "multiple computer guess");
}


//function to run the game
$(document).ready(function () {

    $("#number-to-guess").html(num);

    //onclick events for each individual picture that allows it to add the random number 
    //to the sum of playerScore and writes it to the HTML
    $("#diamond").click(function (event) {
        playerScore = playerScore + diamond;
        $("#diamond").text(playerScore);
        $("#playerGuess").html(playerScore);
        playGame();
        console.log(diamond, "D Guess")
    });
    $("#sapphire").click(function (event) {
        playerScore = playerScore + sapphire;
        $("#sapphire").text(playerScore);
        $("#playerGuess").html(playerScore);
        playGame();
        console.log(sapphire, "s guess")
    });
    $("#pinkSapphire").click(function (event) {
        playerScore = playerScore + pinkSapphire;
        $("#pinkSapphire").text(playerScore);
        $("#playerGuess").html(playerScore);
        playGame();
        console.log(pinkSapphire, "p guess")
    });
    $("#ruby").click(function (event) {
        playerScore = playerScore + ruby;
        $("#ruby").text(playerScore);
        $("#playerGuess").html(playerScore);
        playGame();
        console.log(ruby, "r guess")
    });
    //function that tells the computer when to send an alert if the player either gets the 
    //number correct or wrong, adds either a win or a loss and tells it to reset and play again
    function playGame() {
        if (playerScore == num) {
            alert("Yay!!! Way to do basic addition!!!!!");
            $("#wins").html(wins +=1 );
            play();
        } else if(playerScore > num) {
            alert("Maybe you should try using a calculator or something next time");
            $("#losses").html(losses +=1 );
            play();
        }
       

    }

});