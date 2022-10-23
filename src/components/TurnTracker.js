import React from 'react';

function TurnComponent(props) {
    return (
      <div className='buttonWrapper'>
        {/* button to increase turn by 1 */}
        <button onClick={() => props.setTurn(props.turn + 1)}>+</button>
        {/* display current turn */}
        <p>Turn: {props.turn}</p>
        {/* button to decrease turn by 1 to minimum of 0*/}
        {/*TODO:  Would like this to incremenent/decrement CP appropriately at some point in future */}
        <button onClick={() => props.turn >1 ?props.setTurn(props.turn - 1):null}>-</button>
      </div>
    );
  }
  
  export default TurnComponent;