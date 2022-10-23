import React from 'react';

function Header(props) {
    return (
      <div>
        <h1>The {props.chivalry === 0?"Dishonoured":props.chivalry > 4?"Virtuous":"Honoured"} Knights Hawkshroud</h1>
        <h2>Total Victory Points: {props.totalVP}</h2>
      </div>
      
    );
  }
  
  export default Header;