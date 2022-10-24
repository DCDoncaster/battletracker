import React from 'react';

function TurnComponent(props) {
   function addCPOnNewTurn(){
    // TODO limit turns to 5
    props.setTurn(props.turn + 1);
    props.setCommandPoints(props.commandPoints + 1);
   }
   function stepBackTurn(){
    if(props.turn > 1){
    props.setTurn(props.turn - 1);
    props.setCommandPoints(props.commandPoints - 1);
    }else{
     //TODO: add an error here when previous statement cannnot run
   

    }
   }


    return (
      <div className='buttonWrapper'>
        {/* button to increase turn by 1 */}
        <button className='customBtn' onClick={addCPOnNewTurn}>+</button>
        {/* display current turn */}
        <p>Turn: {props.turn}</p>
        {/* button to decrease turn by 1 to minimum of 0*/}
        {/*DONE:  Would like this to incremenent/decrement CP appropriately at some point in future */}
        <button className='customBtn' onClick={stepBackTurn}>-</button>
      </div>
    );
  }
  
  export default TurnComponent;