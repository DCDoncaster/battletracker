import React from 'react';

function TurnComponent(props) {
   function addCPOnNewTurn(){
    props.setTurn(props.turn + 1);
    props.setCommandPoints(props.commandPoints + 1);
   }
   function stepBackTurn(){
    if(props.turn > 1){
    props.setTurn(props.turn - 1);
    props.setCommandPoints(props.commandPoints - 1);
    }
   }


    return (
      <div className='buttonWrapper'>
        {/* button to increase turn by 1 */}
        <button onClick={addCPOnNewTurn}>+</button>
        {/* display current turn */}
        <p>Turn: {props.turn}</p>
        {/* button to decrease turn by 1 to minimum of 0*/}
        {/*DONE:  Would like this to incremenent/decrement CP appropriately at some point in future */}
        <button onClick={stepBackTurn}>-</button>
      </div>
    );
  }
  
  export default TurnComponent;