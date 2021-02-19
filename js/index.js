var noOfDrumButtons=document.querySelectorAll(".drum").length;
//Detecting Button Press
for(var i=0;i<noOfDrumButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    // this.style.color="white";
    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
// document.querySelectorAll(".drum")[0].addEventListener("click",function() {
//   var audio=new Audio("sounds/tom-1.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[1].addEventListener("click",function() {
//   var audio=new Audio("sounds/tom-2.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[2].addEventListener("click",function() {
//   var audio=new Audio("sounds/tom-3.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[3].addEventListener("click",function() {
//   var audio=new Audio("sounds/tom-4.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[4].addEventListener("click",function() {
//   var audio=new Audio("sounds/crash.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[5].addEventListener("click",function() {
//   var audio=new Audio("sounds/kick-bass.mp3");
//   audio.play();
// });
// document.querySelectorAll(".drum")[6].addEventListener("click",function() {
//   var audio=new Audio("sounds/snare.mp3");
//   audio.play();
// });
//Detecting Keyboard Press
document.addEventListener("keypress",function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key)
{
  switch (key) {
        case 'w':
             var tom1=new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;
        case 'a':
             var tom2=new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;
        case 's':
             var tom3=new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;
        case 'd':
             var tom4=new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;
        case 'j':
             var crash=new Audio("sounds/crash.mp3");
             crash.play();
             break;
        case 'k':
             var kick=new Audio("sounds/kick.mp3");
             kick.play();
             break;
        case 'l':
             var snare=new Audio("sounds/snare.mp3");
             snare.play();
             break;
    default:
             console.log(key);
  }
}
function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function() {
    activeKey.classList.remove("pressed");
  },100);
}
