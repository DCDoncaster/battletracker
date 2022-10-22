import React, {UseEffect} from 'react';

function TurnComponent(props) {
    return (
      <div>
        {/* button to decrease turn by 1 to minimum of 0*/}
        <button onClick={() => props.turn >1 ?props.setTurn(props.turn - 1):props.setTurn}>-</button>
        {/* display current turn */}
        <p>Turn: {props.turn}</p>
        {/* button to increase turn by 1 */}
        <button onClick={() => props.setTurn(props.turn + 1)}>+</button>
  
      </div>
    );
  }
  
  export default TurnComponent;