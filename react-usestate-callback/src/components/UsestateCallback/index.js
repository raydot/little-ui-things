import React, { useState, useEffect } from "react";

const UsestateCallback = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 1) {
      console.log("Threshold of >1 reached");
    } else {
      console.log("Threshold not yet reached");
    }
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>UsestateCallback</h3>
      <p>{count}</p>

      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UsestateCallback;
