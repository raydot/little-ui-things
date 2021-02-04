import React, { useState } from "react";
import styled from "styled-components";

// This ticks a lot more boxes in terms of ARIA

const UEButtonToggle = () => {
  const [pressed, setPressed] = useState(false);

  const toggle = (event) => {
    setPressed(!pressed);
    console.log(pressed);
  };

  return (
    <div>
      <ToggleWrapper onClick={toggle}>
        <Toggle type="button" aria-pressed={pressed} />
        <ToggleLabel />
      </ToggleWrapper>
    </div>
  );
};

const ToggleWrapper = styled.div`
  position: relative;
`;

const ToggleLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 15px;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #fff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const Toggle = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &[aria-pressed="true"] + ${ToggleLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default UEButtonToggle;
