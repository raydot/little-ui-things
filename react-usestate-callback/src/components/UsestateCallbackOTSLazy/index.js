import React from "react";

import { useStateWithCallbackLazy } from "use-state-with-callback";

const UsestateCallbackOTSLazy = () => {
  const [count, setCount] = useStateWithCallbackLazy(0);

  const handleClick = () => {
    setCount(count + 1, (currentCount) => {
      if (currentCount > 1) {
        console.log("Threshold of >1 reached.");
      } else {
        console.log("No threshold reached.");
      }
    });
  };

  return (
    <div>
      <h3>UsestateCallbackOTSLazy</h3>
      <p>{count}</p>

      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UsestateCallbackOTSLazy;
