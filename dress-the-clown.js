  
  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")



var clownHead = document.getElementById('head');
var clownBody = document.getElementById('body');
var clownShoes = document.getElementById('feet');

//clownHead.addEventListener('click', dressHead);

var headIndex = 0
var bodyIndex = 0
var feetIndex = 0
var partIndex = 2



window.addEventListener("keyup", checkKeyPress, false);



function checkKeyPress(key){
  if (key.keyCode == "39"){
    keyLeft();
  } if (key.keyCode == "37"){
    keyRight();
  } if (key.keyCode == "38"){
    partIndex ++;
    nameParts(); 
  } if (partIndex < 0){
    partIndex ++;
  } if (key.keyCode == "40"){
    partIndex --;
    nameParts(); 
  } else if (partIndex == 3){
    partIndex --;
  } console.log(partIndex);

  changeClothes();

  
}

function keyLeft(){
  if (partIndex === 2){
  headIndex ++;
  }if (headIndex == 5){
    headIndex = 0;
  } else if (partIndex === 1){
  bodyIndex ++;
  } if (bodyIndex == 5){
    bodyIndex = 0;
  } else if (partIndex === 0){
    feetIndex ++;
    } if (feetIndex == 5){
      feetIndex = 0;
    }
}

function keyRight(){
  if (partIndex === 2){
    headIndex --;
    }if (headIndex == -1){
      headIndex = 5;
    } else if (partIndex === 1){
    bodyIndex --;
    } if (bodyIndex == -1){
      bodyIndex = 5;
    } else if (partIndex === 0){
      feetIndex --;
      } if (feetIndex == -1){
        feetIndex = 5;
      }
  }

  
  function nameParts(){
    if (partIndex == 2){
      document.getElementById('partName').innerHTML = "Head";
    } if (partIndex == 1){
      document.getElementById('partName').innerHTML = "Body";
    } if (partIndex == 0){
      document.getElementById('partName').innerHTML = "Shoes";
    }
  }



function changeClothes(){

  if (partIndex == 2){
    clownHead.src = "./images/head" + headIndex + ".png";

  } if (partIndex == 1){
    clownBody.src = "./images/body" + bodyIndex + ".png";
  
  } if (partIndex == 0){
    clownShoes.src = "./images/shoes" + feetIndex + ".png";

  }

  
}