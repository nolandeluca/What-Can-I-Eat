import React from "react";

function ActivitySelect(props) {
  return (
    <div className={`form-group ${props.hasErrors ? "has-error" : ""}`}>
      <label className="col-sm-2 control-label">Activity Level</label>
      <div className="col-sm-10">
        <select
          className="form-control"
          name={props.name}
          onChange={props.handleActivityLevelChange}
          onBlur={props.handleErrors}
        >
          <option value="">Select an activity level</option>
          <option value="1.2">Little to no exercise</option>
          <option value="1.375">Light exercise</option>
          <option value="1.55">Moderate exercise</option>
          <option value="1.75">Heavy exercise</option>
          <option value="1.9">Very heavy exercise</option>
        </select>
        {props.children}
      </div>
    </div>
  );
}

export default ActivitySelect;
