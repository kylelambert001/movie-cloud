import React from "react";

import Spinner from "../Spinner/Spinner";
import "./Loading.scss";

function Loading(props) {
  // return (
  //   <motion.div
  //     key="fm-loading"
  //     initial="hidden"
  //     animate="visible"
  //     exit="hidden"
  //     variants={pageVariant}
  //     className="LoadingView">
  //     <div className="Loading-inner">
  //       <Spinner />
  //     </div>
  //   </motion.div>
  // );

  return (
    <div className="Loading">
      <div className="Loading-inner">
        <Spinner />
      </div>
    </div>
  );
}

export default Loading;
