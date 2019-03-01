import React from "react";
import "./DisplayOutput.css";

function DisplayOutput(props) {
  return (
    <div className="text-center">
      {props.tdee && (
        <div className="result-block mod-tdee">
          <h4>Total Daily Energy Expenditure:</h4>
          <h1>
            {" "}
            {props.tdee} {props.bmr && "calories"}
          </h1>
          <p>
            The calories your body will burn in a day based on your activity
            level.
          </p>
        </div>
      )}
      {props.bmr && (
        <div className="result-block mod-bmr">
          <h4>Base Metabolic Rate:</h4>
          <h1>
            {props.bmr} {props.bmr && "calories"}
          </h1>
          <p>your body will burn this many calories in a day.</p>
        </div>
      )}
    </div>
  );
}

export default DisplayOutput;
