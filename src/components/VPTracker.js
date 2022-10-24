import React from "react";

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
    <div>
      <h3>VP</h3>
      <ul>
        {props.totalVP.map((counter, i) => (
          <li key={i}>
            Turn {i + 1}:{" " + counter + " "}
            {/* DONE: Stop counting at 15  - handled in increment handler*/}
            <button
              onClick={() => {
                handleDecrementClick(i);
              }}
            >
              -1
            </button>
            <button
              onClick={() => {
                handleIncrementClick(i);
              }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VPComponent;
