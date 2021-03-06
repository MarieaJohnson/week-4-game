// Crystals Collector Game

var sum;
var userRandom;
var crystalValue;

//Generate random number for user between 19 - 120
startGame = function (){

  userRandom = getRandomInt(19, 120);
  console.log("userRandom: ", userRandom);
  //Place random number for user in user box
  $(".userNumber").text(userRandom);

   sum = 0;
}

startGame();

//Generate random number for sapphire gem between 1 - 12
var rubyRandom = getRandomInt(1, 12);
console.log("rubyRandom: ", rubyRandom);
$(".ruby").val(rubyRandom);

//Generate random number for diamond gem between 1 - 12
var diamondRandom = getRandomInt(1, 12);
console.log("diamondRandom: ", diamondRandom);
$(".diamond").val(diamondRandom);

//Generate random number for emerald gem between 1 - 12
var emeraldRandom = getRandomInt(1, 12);
console.log("emeraldRandom: ", emeraldRandom);
$(".emerald").val(emeraldRandom);

//Generate random number for ruby gem between 1 - 12
var sapphireRandom = getRandomInt(1, 12);
console.log("sapphireRandom: ", sapphireRandom);
$(".sapphire").val(sapphireRandom);

//Track number of wins/losses
var wins = 0;
var losses = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function startGame();
$(".crystal").click(function () {
  //Add each gem click event to gem total box
  crystalValue = parseInt($(this).val());
  console.log(crystalValue);
  sum = crystalValue + sum;
  $(".crystalValue").html(sum);
  console.log(sum);
  //Total gems# == user#, then "You Win!"
  if (sum === userRandom) {
    wins++;
    $("#wins").text(wins);
    startGame();
  } 
  //Total gems# > user#, then "You Lose!"
  if (sum > userRandom) {
    losses++;
    $("#losses").text(losses);
    startGame();
  }
});