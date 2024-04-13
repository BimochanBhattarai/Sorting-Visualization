import React from "react";
import "./SortingVisualization.css";
export default function SortingVisualization(props) {

    const {Array} = props; 
    console.log("From Sorting " + Array);

    if(!Array)
    {
        return <div>Loading....</div>
    }

  return (
    <>
      <div className="container">
        {Array.map((value, idx) => {
          return (
            <div
              className="Arr-Bar"
              key={idx}
              style={{ height: `${value}px`, marginTop: `${550 - value}px` }}
            ></div>
          );
        })}
      </div>
     </>
  );
}
