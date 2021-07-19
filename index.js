var randomNumber1 = 1 + Math.floor( Math.random() * 6 );
var randomDiceImgSrc = "images/" +"dice" + randomNumber1 + ".png";
var firstImg = document.querySelectorAll("img")[0];
firstImg.setAttribute("src",randomDiceImgSrc);

var randomNumber2 = 1 + Math.floor( Math.random() * 6 );
var SecondImgSrc = "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",SecondImgSrc);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "&#128151 Player 1 wins";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = " &#9889 Player 2 wins";
}
else
    document.querySelector("h1").innerHTML = "&#10060 Draw";