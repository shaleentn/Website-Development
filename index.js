
var number=document.querySelectorAll(".drum").length;

for (var i =0; i < number; i++){


document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var button=this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
});


document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
});

function makeSound(key){
    switch(key){
        case "w":
               var audio=new Audio("sounds/Floor-Tom-Drum-Hit-Level-5B-www.fesliyanstudios.com.mp3");
                audio.play();
                break;
    
         case "a":
            var tom2=new Audio("sounds/Floor-Tom-Drum-Hit-Level-6A-www.fesliyanstudios.com.mp3");
            tom2.play();
            break;
    
        case "s":
            var tom3=new Audio("sounds/Floor-Tom-Drum-Hit-Level-7A-www.fesliyanstudios.com.mp3");
            tom3.play();
            break;
        
         case "d":
            var tom4=new Audio("sounds/Crash-Cymbal-Hit-B-www.fesliyanstudios.com (1).mp3");
            tom4.play();
            break;
    
         case "j":
            var cymbal=new Audio("sounds/China-Cymbal-Crash-Level-2A-www.fesliyanstudios.com.mp3");
            cymbal.play();
            break;
    
        case "k":
            var crescendo=new Audio("sounds/Crash-Cymbal-Crescendo-Wash-www.fesliyanstudios.com.mp3");
            crescendo.play();
            break;
            
        case "l":
            var hithat=new Audio("sounds/Hi-Hat-Closed-Hit-B3-www.fesliyanstudios.com.mp3");
            hithat.play();
            break;
    
        default:console.log(button)
    }
}
}
function buttonAnimation(currentKey){
  var active= document.querySelector( "." + currentKey);
  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed")
  }, 100)
}






