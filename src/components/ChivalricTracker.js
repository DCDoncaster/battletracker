import React from 'react';

function ChivalryComponent(props) {
    return (
      // TODO: add a selector to allow to chose oaths and display these somewhere
      <div className='buttonWrapper'>
        {/* button to increase chivalry by 1 to max of 6*/}
        <button className='customBtn' onClick={() => props.chivalry <6? props.setChivalry(props.chivalry + 1):props.setChivalry}>+</button>
        {/* display current chivalry */}
        <p>Code Chivalric: {props.chivalry}</p>
        {/* button to decrease chivalry by 1 to minimum of 0*/}
        <button className='customBtn' onClick={() => props.chivalry >0 ?props.setChivalry(props.chivalry - 1):props.setChivalry}>-</button>
        </div>
        
      
    );
  }
  
  export default ChivalryComponent;