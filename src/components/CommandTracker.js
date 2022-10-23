import React from 'react';

function CommandComponent(props) {
    return (
      
      <div className='buttonWrapper'>
        {/* button to increase command by 1 */}
        <button onClick={() => props.setCommandPoints(props.commandPoints + 1)}>+</button>
        {/* display current command */}
        <p>CP: {props.commandPoints}</p>
        {/* button to decrease command by 1 to minimum of 0*/}
        <button onClick={() => props.commandPoints >0 ?props.setCommandPoints(props.commandPoints - 1):props.setCommandPoints}>-1</button>
        <button onClick={() => props.commandPoints >0 ?props.setCommandPoints(props.commandPoints - 2):props.setCommandPoints}>-2</button>
        <button onClick={() => props.commandPoints >0 ?props.setCommandPoints(props.commandPoints - 3):props.setCommandPoints}>-3</button>
        </div>
        
      
    );
  }
  
  export default CommandComponent;