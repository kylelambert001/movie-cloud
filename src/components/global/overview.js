import React from "react";

import Poster from "../global/poster";
import Summary from "../global/summary";

function Overview({ data, mediaType }) {
  return (
    <div className="overview">
      <Poster data={data} mediaType={mediaType} />
      <Summary data={data} mediaType={mediaType} />
    </div>
  );
}

export default Overview;
