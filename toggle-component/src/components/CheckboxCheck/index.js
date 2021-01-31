import React, { useState } from "react";
import Checkbox from "./Checkbox";
// import styled from "styled-components";

// const Checkbox = (props) => <input type="checkbox" {...props} />;

const CheckboxCheck = () => {
  const [checkedVar, setCheckedVar] = useState(false);

  const handleCheckboxChange = (event) => {
    console.log("EEP");
    //setChecked(!checked);
    setCheckedVar(event.target.checked);
  };

  return (
    <div>
      <label>
        <Checkbox checked={checkedVar} onChange={handleCheckboxChange} />
        <span>Label Text</span>
      </label>
    </div>
  );
};

/**
 * Notice the addition of .attrs() to provide default attributes to the input element
 * that's created with styled-components.  Adding a type element of checkbox is what
 * makes the input a checkbox instead of a text input.
 */

export default CheckboxCheck;
