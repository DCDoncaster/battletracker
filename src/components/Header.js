import React from 'react';

function Header(props) {

function resetStates(){
  props.setChivalry(1);
  props.setCommandPoints(1);
  props.setTurn(1);
  props.setTotalVP([0,0,0,0,0]);
  props.setCode1("Select an Oath");
  props.setCode2("Select an Oath");
  document.getElementById("CCode1").options[0].selected = true;
  document.getElementById("CCode2").options[0].selected = true;

}
    return (
      <div id="Header">

        {/* TODO: add a selector so the house is not hardcoded and can be changed */}
        <h2>The {props.chivalry === 0?"Dishonoured":props.chivalry > 4?"Virtuous":"Honoured"} Knights of House Hawkshroud</h2>
        {/*DONE: Loop through Total VP Array and total it instead of just displaying the array */}
        <h3>Total Victory Points: {props.totalVP.reduce((a, b) => a + b, 0)}</h3>
          
        <p>{props.code1 !== "Select an Oath"? props.code1: null}</p>
        <p>{props.code2 !== "Select an Oath"? props.code1 === props.code2?"Please select a second oath, taking the same oath twice has no benefit." : props.code2: null}</p>
        <button className='customBtn' onClick={resetStates}>Reset</button>    
      </div>
      
    );
  }
  
  export default Header;