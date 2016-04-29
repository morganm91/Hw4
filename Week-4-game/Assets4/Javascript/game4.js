 var crystalGame ={
 	var wins = 0;
 	var losses = 0;
 	var scoreCount = 0;


 //where random number is displayed at the start of 
 // each game between 19-120
 	
 		var randomWinNumb = Math.floor(Math.random()*69) + 1
$("#numberBox").html(randomWinNumb);

//player wins game if they match their crystal from
// to the number box- You won!! will be displayed or
// You lost. will be displayed as well as the total 
//being added to that section. game restarts after 
//player won or lost
 	$("#scoreBox").html("Wins: "  + wins++ + "Losses: " + losses++)

//random number between 1-12, changes at the start of
// each game
 	$("#jewel1").on('click', function ()
 			{
 				var randomNumber = Math.floor(Math.random()*12) + 1
 			console.log(randomNumber);
 			scoreCount++;
 			});

//random number between 1-12, changes at the start of
// each game
 	$("#jewel2").on('click', function()
 			{
 			var randomNumber = Math.floor(Math.random()*12) + 1
 			console.log(randomNumber);
 			scoreCount++;
 			})

//random number between 1-12, changes at the start of
// each game
 	$("#jewel3").on('click', function()
 			{
 			var randomNumber = Math.floor(Math.random()*12) + 1
 			console.log(randomNumber);
 			scoreCount++;
 			})

//random number between 1-12, changes at the start of
// each game
 	$("#jewel4").on('click', function()
 			{
 			var randomNumber = Math.floor(Math.random()*12) + 1
 			console.log(randomNumber);
 			scoreCount++;
 			})

//when player clicks on crystal it will add to number
// in this box
 	$("#totalScoreBox").html(scorecount++)
 	$("scoreBox").html(scoreCount)

 };

 crystalGame.setupGame();