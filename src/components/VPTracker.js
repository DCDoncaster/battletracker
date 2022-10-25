import React from "react";
//TODO: Stop VP being changed for none current turn
function VPComponent(props) {
  // DONE add a decrement button for VP
  function handleIncrementClick(index) {
    const nextVP = props.totalVP.map((list, i) => {
      if (i === index) {
        // Increment the clicked counter
        return list === 15 ? 15 : list + 1;
      } else {
        // The rest haven't changed
        return list;
      }
    });
    props.setTotalVP(nextVP);
  }
  function handleDecrementClick(index) {
    const nextVP = props.totalVP.map((list, i) => {
      if (i === index) {
        // Increment the clicked counter
        return list <= 0 ? 0 : list - 1;
      } else {
        // The rest haven't changed
        return list;
      }
    });
    props.setTotalVP(nextVP);
  }

  return (
    <div id='primaryVP'>
      <p>
        <h3>VP</h3>
      </p>
      <div id='primaryHolder'>
      <p>
        {props.totalVP.map((counter, i) => (
          <p className='clearList' key={i}>
            Turn {i + 1}:{" " + counter + " "}
            {/* DONE: Stop counting at 15  - handled in increment handler*/}
            <button className='customBtn'
              onClick={() => {
                handleDecrementClick(i);
              }}
            >
              -1
            </button>
            <button className='customBtn'
              onClick={() => {
                handleIncrementClick(i);
              }}
            >
              +1
            </button>
          </p>
        ))}
      </p>
      </div>
    </div>
  );
}

export default VPComponent;
