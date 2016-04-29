
//}
 //where random number is displayed at the start of 
 // each game between 19-120
 window.onload = function (){	
 	var total=0;


function ranNum(min,max){
	var randomNum = 0;
	randomNum = Math.floor((Math.random () * (max - min + 1 )) + min);
		return randomNum;  
}
	var randomNum = ranNum (19,120);
	function  showNum (ranNum){
		var result; 
		document.getElementById("numberBox").innerHTML = ranNum;

	}


function addCrystal(crystal){
    total = total + crystal;
    return total;
  }
  function showSum(crys){
    var sum = addCrystal(crys);
    document.getElementById("totalScoreBox").innerHTML = sum;
    return sum;
  }
  function test_winner(sum){
    if(sum == randomNumber){
      document.getElementById("scoreBox").innerHTML = "You Win!"
    }else if(sum =! randomNumber){
      ocument.getElementById("scoreBox").innerHTML = "You Lose!"
    }

  }

  showNum(randomNumber);
  var crystal1 = ranNum(1, 12);
  var crystal2 = ranNum(1, 12);
  var crystal3 = ranNum(1, 12);
  var crystal4 = ranNum(1, 12);
  $('#jewel1').on('click', function(){
    test_winner(showSum(crystal1));
  });
  $('#jewel2').on('click', function(){
    test_winner(showSum(crystal2));
  });
  $('#jewel3').on('click', function(){
    test_winner(showSum(crystal3));
  });
  $('#jewel4').on('click', function(){
    test_winner(showSum(crystal4));
  });
