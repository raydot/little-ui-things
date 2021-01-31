import React from "react";
import styled from "styled-components";

const RudimentaryToggle = () => {
  return (
    <div>
      <Checkbox type="checkbox" id="toggle" className="checkbox" />
      <CheckboxLabel for="toggle" className="switch"></CheckboxLabel>
    </div>
  );
};

const CheckboxLabel = styled.label`
  &.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #eee;
    border-radius: 20px;
  }

  &.switch::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    top: 1px; // TO GIVE GLORIOUS EFFECT OF CIRCLE INSIDE SWITCH
    left: 1px;
    transition: all 0.3s;
  }
`;

const Checkbox = styled.input`
  &:checked + &.switch::after {
    left: 20px;
  }

  &:checked + &.switch {
    background-color: #7983ff;
  }
`;

export default RudimentaryToggle;
