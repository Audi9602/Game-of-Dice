var randNum1 = Math.floor(Math.random()*6)+1; //dice throw from 1 to 6
var randDice1 = "images/dice"+randNum1+".png"; //dice roll added with imgs
var dcImg1 = document.querySelectorAll("img")[0]; 
dcImg1.setAttribute("src",randDice1); //result

var randNum2 = Math.floor(Math.random()*6)+1; //dice throw for second img
var randDice2 = "images/dice"+randNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randDice2);

//announcing winners!
if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randNum1 < randNum2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Aww.. it's a draw";
}

