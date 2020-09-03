import React, { Component } from "react";
import { motion } from "framer-motion";

import { fadeInVariant } from "../../animations/variants";

class FadeIn extends Component {
  constructor(props) {
    super(props);
    this.state = { hasLoaded: false };
    this.handleOnLoad = this.handleOnLoad.bind(this);
  }

  handleOnLoad() {
    this.setState((state) => ({
      hasLoaded: !state.hasLoaded,
    }));
  }

  render() {
    const { hasLoaded } = this.state;
    return (
      <motion.div
        initial="hidden"
        animate={hasLoaded ? "visible" : "hidden"}
        variants={fadeInVariant}
        style={{ height: "100%" }}
        className="fade-in">
        {this.props.children(this.handleOnLoad)}
      </motion.div>
    );
  }
}

export default FadeIn;
