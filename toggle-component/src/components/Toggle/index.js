import React, { useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";

// This has the advantage of being derived from a button and using the "aria-expanded"
// property.
const Toggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p>Open: {open}</p>
      <Box>
        {/* <button
          type="button"
          id="styled"
          aria-pressed="false"
          onclick="toggle(this.id)"
        >
          Styled button
        </button> */}
        <ToggleButton
          aria-expanded={open === true ? "true" : "false"}
          className={open === true ? "active" : ""}
          onClick={() => setOpen(!open)}
        >
          Toggle
        </ToggleButton>
        <SecretMenu className={open ? "show" : "hide"}>
          <li>
            This goes to 11
            <button>
              <span>on</span>
              <span>off</span>
            </button>
          </li>
          <li>
            More curry, Jack?
            <button>
              <span>on</span>
              <span>off</span>
            </button>
          </li>
        </SecretMenu>
      </Box>
    </div>
  );
};

const ToggleButton = styled.button`
  color: #f00;
`;

const SecretMenu = styled.ul`
  &.hide {
    display: none;
  }

  &.show {
    display: block;
  }
`;

export default Toggle;
