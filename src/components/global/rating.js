import React from "react";

function Rating({ voteAverage, voteCount }) {
  const getAverage = () => {
    if (typeof voteAverage !== "number") return "0.0";
    return Number.isInteger(voteAverage) ? `${voteAverage}.0` : voteAverage;
  };
  return (
    <div className="rating">
      <span className="rating-score">{getAverage()}</span>
      <span className="rating-count">{`${voteCount} Reviews`}</span>
    </div>
  );
}

export default Rating;
