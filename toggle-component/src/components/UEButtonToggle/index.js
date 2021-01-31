import React, { useState } from "react";
import styled from "styled-components";

// This ticks a lot more boxes in terms of ARIA

const UEButtonToggle = () => {
  const [pressed, setPressed] = useState(false);

  const toggle = (event) => {
    // toogle that button
    // console.log("UEButtonToggle");

    setPressed(!pressed);
    console.log(pressed);
  };

  return (
    <div>
      <Toggles>
        <button
          type="button"
          id="styled"
          aria-pressed={pressed}
          onClick={toggle}
        >
          Styled Button
        </button>
      </Toggles>
    </div>
  );
};

const Toggles = styled.div`
  box-sizing: border-box;
  position: relative;
  &[aria-pressed="true"] {
    display: block;
    box-sizing: border-box;
    border: none;
    color: inherit;
    background: none;
    font: inherit;
    line-height: inherit;
    text-align: left;
    padding: 0.4em 0 0.4em 4em;
    position: relative;
  }
`;

export default UEButtonToggle;
