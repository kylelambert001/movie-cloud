import React, { Component } from "react";
import { motion } from "framer-motion";

const variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

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
        variants={variant}
        style={{
          height: "100%",
          width: "100%",
        }}
        className="fade-in">
        {this.props.children(this.handleOnLoad)}
      </motion.div>
    );
  }
}

export default FadeIn;
