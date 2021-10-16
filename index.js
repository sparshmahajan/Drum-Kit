varvar totalButtons = document.querySelectorAll(".btn").length;
for(var i=0 ; i < totalButtons ; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", function (){
    var innerHtml = this.innerHTML;
    makeSound(innerHtml); 
    buttonAnimation(innerHtml);
  });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch(key){
   case "w":
     var audio = new Audio("sounds/tom-1.mp3");
     audio.play();
     break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
     audio.play();
     break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
     audio.play();
     break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
     audio.play();
     break;
    case "q":
      var audio = new Audio("sounds/kick-bass.mp3");
     audio.play();
     break;
    case "e":
      var audio = new Audio("sounds/snare.mp3");
     audio.play();
     break;
    case "f":
      var audio = new Audio("sounds/crash.mp3");
     audio.play();
     break;
    default:
      break;
  }
}

function buttonAnimation(key){
 var activeButton = document.querySelector("#"+key);
 activeButton.classList.add("pressed"); 
 
setTimeout(function (){
  activeButton.classList.remove("pressed");
},100);

}

