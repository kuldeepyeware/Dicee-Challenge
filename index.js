var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomImage = "dice" + randomNumber1 + ".png";
var imagesource = "images/" + randomImage;
var randomImageselector = document.querySelectorAll("img")[0].setAttribute("src", imagesource);     

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImage = "images/dice" + randomNumber2 + ".png";
var  randomImageselector = document.querySelectorAll("img")[1].setAttribute("src", randomImage);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is Winner";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 is Winner";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}