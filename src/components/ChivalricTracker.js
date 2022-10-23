import React from 'react';

function ChivalryComponent(props) {
    return (
      
      <div className='buttonWrapper'>
        {/* button to increase chivalry by 1 to max of 6*/}
        <button onClick={() => props.chivalry <6? props.setChivalry(props.chivalry + 1):props.setChivalry}>+</button>
        {/* display current chivalry */}
        <p>Code Chivalric: {props.chivalry}</p>
        {/* button to decrease chivalry by 1 to minimum of 0*/}
                <button onClick={() => props.chivalry >0 ?props.setChivalry(props.chivalry - 1):props.setChivalry}>-</button>
        </div>
        
      
    );
  }
  
  export default ChivalryComponent;