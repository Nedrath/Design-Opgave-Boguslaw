import React, { useState, useEffect } from "react";

const Completion = ({ percentage }) => {
  // style er i css da jeg ikke kan tilføje flere classes før jeg bruger emotion/core

  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (percentage < 100) setProgress("threeQuarters");
    if (percentage < 75) setProgress("half");
    if (percentage < 50) setProgress("oneQuarter");
    if (percentage < 1) setProgress("notStarted");
  }, [percentage]);

  return (
    <div className={`styleCircle + ${progress && progress}`}>
      <p className="stylePercentage">{percentage}%</p>
    </div>
  );
};

export default Completion;
