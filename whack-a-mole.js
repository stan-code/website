  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var cellsArray = document.getElementsByTagName('td')
var array = [cellsArray[0],cellsArray[1],cellsArray[2],cellsArray[3],cellsArray[4],
            cellsArray[5],cellsArray[6],cellsArray[7],cellsArray[8],cellsArray[9],
            cellsArray[10],cellsArray[11],cellsArray[12],cellsArray[13],cellsArray[14],
            cellsArray[15],cellsArray[16],cellsArray[17],cellsArray[18],cellsArray[19],
            cellsArray[20],cellsArray[21],cellsArray[22],cellsArray[23],cellsArray[24]]

console.log(array)

document.addEventListener('click', onclick)

//var randomNumber = Math.floor(Math.random() * 25);

//function randomNumGen(){

//var randomMole = "cellsArray"+"["+randomNumber+"]";
//return randomMole;

//console.log(randomMole);

//}


//function randomMoleImage(){
 // randomMole.classList.add('holeyMoley');
//}

//console.log(randomMole)

function randomCell(){

  var randomIndex = array[Math.floor(Math.random()*array.length)];
  randomIndex.classList.add('holeyMoley');
  }

  randomCell();

  

//function celltext (){
 // console.log(array[4])
//}


//celltext();

console.log("Whack-a-Mole!")

