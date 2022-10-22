let turnNumber = 1;
let chivalric = 1;
let commandPoints = 0;
let VP = [0];

function turnNumberIncrease() {
  turnNumber++;
}
function turnNumberDecrease() {
  turnNumber--;
}
function chivalricIncrease() {
  chivalric++;
}
function chivalricDecrease() {
  chivalric--;
}
function commandPointsIncrease() {
  commandPoints++;
}
function commandPointsDecrease() {
  commandPoints--;
}

function increasePrimaryVP() {
  //increase the value of the array at the index of turnNumber by 1
  //Leave 0 empty in case of a 'handicap match' with an initial starting number of VP.
  if (turnNumber == VP.length) {
    VP.push(1);
   
  } else {
    VP[turnNumber]++;

  }
}

increasePrimaryVP();

console.log(VP);