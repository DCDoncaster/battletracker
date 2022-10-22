let turnNumber = 1;
let chivalric = 1;
let commandPoints = 0;
let VP = [0,1,2];

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
  //increase the value of the array at the index of turnNumber-1 by 1
    VP[turnNumber-1]++;
}
function decreasePrimaryVP() {
  //increase the value of the array at the index of turnNumber-1 by 1
    VP[turnNumber-1]--;
}
export { turnNumber, chivalric, commandPoints, VP,decreasePrimaryVP, turnNumberIncrease, turnNumberDecrease, chivalricIncrease, chivalricDecrease, commandPointsIncrease, commandPointsDecrease, increasePrimaryVP };

