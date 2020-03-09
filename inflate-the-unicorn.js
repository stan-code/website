  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


/*

Pseudocode

Create variable for the unicorn images with an onClick event that will change the image src on click
Create a variable and set it to 0 (this will be used to count the number of clicks)
Create a function that will ++ the number of the counter variable
Create a function that will update the uncorn image if counter variable == certain number
end the else if statement with an alert that says "You have inflated the baloon!"

*/


var unicorn0 = document.getElementsByClassName('inflate-an-image')[0];
    unicorn0.addEventListener("click", uniClick0);

    
  var unicorn1 = document.getElementsByClassName('inflate-an-image')[1];
      unicorn1.addEventListener("click", uniClick1);

    var unicorn2 = document.getElementsByClassName('inflate-an-image')[2];
        unicorn2.addEventListener("click", uniClick2);



    
let unicornClick0 = 0
let unicornClick1 = 0
let unicornClick2 = 0


function uniClick0(){
  unicornClick0 ++;
    console.log(unicornClick0)
      uniClickCount0();

}

  function uniClick1(){
    unicornClick1 ++;
      console.log(unicornClick1)
        uniClickCount1();

  }

    function uniClick2(){
      unicornClick2 ++;
        console.log(unicornClick2)
          uniClickCount2();

    }

    var audio = new Audio();
audio.src = "inflate.mp3";

var neigh = new Audio();
neigh.src = "neigh.mp3";



function uniClickCount0(){

  if (unicornClick0 == 0){
    unicorn0 = document.getElementsByClassName('inflate-an-image')[0];
  unicorn0.src = "./images/unicorn-0.png";
  audio.play();
  } else if (unicornClick0 == 1){
    unicorn0 = document.getElementsByClassName('inflate-an-image')[0];
  unicorn0.src = "./images/unicorn-1.png";
  audio.play();
  } else if (unicornClick0 == 2){
    unicorn0 = document.getElementsByClassName('inflate-an-image')[0];
  unicorn0.src = "./images/unicorn-2.png";
  audio.play();
  } else if (unicornClick0 == 3){
    unicorn0 = document.getElementsByClassName('inflate-an-image')[0];
  unicorn0.src = "./images/unicorn-3.png";
  audio.play();
  } else if (unicornClick0 == 4){
    neigh.play();
    alert("Unicorn Bob says 'Thanks for that.'")
    

  }
}

function uniClickCount1(){

  if (unicornClick1 == 0){
    unicorn1 = document.getElementsByClassName('inflate-an-image')[1];
  unicorn1.src = "./images/unicorn-0.png";
  audio.play();
  } else if (unicornClick1 == 1){
    unicorn1 = document.getElementsByClassName('inflate-an-image')[1];
  unicorn1.src = "./images/unicorn-1.png";
  audio.play();
  } else if (unicornClick1 == 2){
    unicorn1 = document.getElementsByClassName('inflate-an-image')[1];
  unicorn1.src = "./images/unicorn-2.png";
  audio.play();
  } else if (unicornClick1 == 3){
    unicorn1 = document.getElementsByClassName('inflate-an-image')[1];
  unicorn1.src = "./images/unicorn-3.png";
  audio.play();
  } else if (unicornClick1 == 4){
    neigh.play();
    alert("Unicorn Jeff says 'Phew, i nearly thought i'd blown it!.'")

  }
}

function uniClickCount2(){

  if (unicornClick2 == 0){
    unicorn2 = document.getElementsByClassName('inflate-an-image')[2];
  unicorn2.src = "./images/unicorn-0.png";
  audio.play();
  } else if (unicornClick2 == 1){
    unicorn2 = document.getElementsByClassName('inflate-an-image')[2];
  unicorn2.src = "./images/unicorn-1.png";
  audio.play();
  } else if (unicornClick2 == 2){
    unicorn2 = document.getElementsByClassName('inflate-an-image')[2];
  unicorn2.src = "./images/unicorn-2.png";
  audio.play();
  } else if (unicornClick2 == 3){
    unicorn2 = document.getElementsByClassName('inflate-an-image')[2];
  unicorn2.src = "./images/unicorn-3.png";
  audio.play();
  } else if (unicornClick2 == 4){
    neigh.play();
    alert("Unicorn Christopher says 'Awesome job buddy! I'm very glad you've done this for me. I honestly cannot express to you how thankful i am that you've managed to blow up this balloon. Give yourself a pat on the back pal! You deserve it.'")

  }
}
