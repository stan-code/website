  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")



var clownHead = document.getElementById('head');
var clownBody = document.getElementById('body');
var clownShoes = document.getElementById('feet');
//clownHead.addEventListener('click', dressHead);

var headIndex = 0
var partIndex = 2



window.addEventListener("keyup", checkKeyPress, false);



function checkKeyPress(key){
  if (key.keyCode == "39"){
    headIndex ++;
  } if (key.keyCode == "37"){
    headIndex --;
  } if (headIndex == 6){
    headIndex = 0
  } if (headIndex == -1){
    headIndex = 5
  } if (key.keyCode == "38"){
    partIndex ++;
  } if (partIndex == -1){
    partIndex ++;
  } if (key.keyCode == "40"){
    partIndex --;
  } else if (partIndex == 3){
    partIndex --;
  } console.log(partIndex);

  changeClothes();

  
}

function changeClothes(){

  if (partIndex == 2){
    clownHead.src = "./images/head" + headIndex + ".png";
  } if (partIndex == 1){
    clownBody.src = "./images/body" + headIndex + ".png";
  } if (partIndex == 0){
    clownShoes.src = "./images/shoes" + headIndex + ".png";
  }

  
}
