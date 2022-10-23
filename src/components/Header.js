import React from 'react';

function Header(props) {
    return (
      <div>
        <h1>The {props.chivalry === 0?"Dishonoured":props.chivalry > 4?"Virtuous":"Honoured"} Knights Hawkshroud</h1>
        {/*DONE: Loop through Total VP Array and total it instead of just displaying the array */}
        <h2>Total Victory Points: {props.totalVP.reduce((a, b) => a + b, 0)}</h2>
      </div>
      
    );
  }
  
  export default Header;