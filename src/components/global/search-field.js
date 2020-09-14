import React, { Component } from "react";
import { motion } from "framer-motion";

const variant = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.searchContainer = React.createRef();
    this.searchInput = React.createRef();
  }
  componentDidMount() {
    this.searchInput.current.focus();
  }
  render() {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variant}
        ref={this.searchContainer}
        className="search-field">
        <input
          type="text"
          name="query"
          ref={this.searchInput}
          placeholder="Search for a movie, tv show or person..."
          className="search-field-input"
          onChange={this.props.handleChange}
        />
      </motion.div>
    );
  }
}

export default SearchField;
