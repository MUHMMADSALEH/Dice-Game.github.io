var randomeNumber1=Math.floor(Math.random()*6)+1;
var randomeDiceImage1="./images/dice"+randomeNumber1+".png";
var imgAttribute=document.querySelectorAll("img")[0];
imgAttribute.setAttribute("src",randomeDiceImage1); 
// for second player
var randomeNumber2=Math.floor(Math.random()*6)+1;
var randomeDiceImage2="./images/dice"+randomeNumber2+".png";
var imgAttribute=document.querySelectorAll("img")[1];
imgAttribute.setAttribute("src",randomeDiceImage2); 

if(randomeNumber1>randomeNumber2){
    document.querySelector("h1").innerHTML=" Player 1 won ";
}
else if(randomeNumber1<randomeNumber2){
    document.querySelector("h1").innerHTML=" Player 2 won ";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
