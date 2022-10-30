import React from 'react';
import TurnComponent from './TurnTracker';

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
  props.setSecondaryVP([0,0,0]);

}
    return (
      <div id="Header">
        <div id='HeaderLeft'>
        {/* TODO: add a selector so the house is not hardcoded and can be changed - remove House name?*/}
        <h2>The {props.chivalry === 0?"Dishonoured":props.chivalry > 4?"Virtuous":"Honoured"} Knights of House Hawkshroud</h2>
        {/* add total of totalVP array and secondaryVP array together */}
        <h3>Total Victory Points: {(props.totalVP.reduce((a,b)=>a+b,0)<=45?(props.totalVP.reduce((a,b)=>a+b,0)):45) + props.secondaryVP.reduce((a,b)=>a+b,0)}</h3>
        <p>Primary: {props.totalVP.reduce((a,b)=>a+b,0)<=45?props.totalVP.reduce((a,b)=>a+b,0):'45 (Maxed)'}</p><p>Secondary: {props.secondaryVP.reduce((a,b)=>a+b,0)}</p>
        {/* Hidden the below for now - appears ok in the select boxes in Chivalric Tracker */}
        {/* <p>{props.code1 !== "Select an Oath"? props.code1: null}</p>
        <p>{props.code2 !== "Select an Oath"? props.code1 === props.code2?"Please select a second oath, taking the same oath twice has no benefit." : props.code2: null}</p> */}
        
        </div>
        <div><TurnComponent turn={props.turn} setTurn={props.setTurn} commandPoints={props.commandPoints} setCommandPoints={props.setCommandPoints}/>
        <p><button className='customBtn' onClick={resetStates}>Reset</button></p>    
        </div>
      </div>
      
    );
  }
  
  export default Header;