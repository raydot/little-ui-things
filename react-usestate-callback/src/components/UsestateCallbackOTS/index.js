import React from "react";

// This takes care of both useState and useEffect
import useStateWithCallback from "use-state-with-callback";

const UsestateCallbackOTS = () => {
  const [count, setCount] = useStateWithCallback(0, (count) => {
    if (count > 1) {
      console.log("Threshold of >1 reached");
    } else {
      console.log("Threshold not reached");
    }
  });

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>UsestateCallbackOTS</h3>
      <p>{count}</p>
      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UsestateCallbackOTS;
