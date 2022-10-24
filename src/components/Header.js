import React from 'react';

function Header(props) {

function resetStates(){
  props.setChivalry(1);
  props.setCommandPoints(1);
  props.setTurn(1);
  props.setTotalVP([0,0,0,0,0]);
}
    return (
      <div>
        {/* TODO: add a selector so the house is not hardcoded and can be changed */}
        <h1>The {props.chivalry === 0?"Dishonoured":props.chivalry > 4?"Virtuous":"Honoured"} Knights Hawkshroud</h1>
        {/*DONE: Loop through Total VP Array and total it instead of just displaying the array */}
        <h2>Total Victory Points: {props.totalVP.reduce((a, b) => a + b, 0)}</h2>
        <button className='customerBtn' onClick={resetStates}>Reset</button>
      </div>
      
    );
  }
  
  export default Header;