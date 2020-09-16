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
      <motion.form
        initial="hidden"
        animate="visible"
        variants={variant}
        ref={this.searchContainer}
        autoComplete="off"
        className="search-field">
        <input
          type="text"
          value={this.props.query}
          ref={this.searchInput}
          placeholder="Search for a movie, tv show or person..."
          className="search-field-input"
          onChange={this.props.handleChange}
        />
      </motion.form>
    );
  }
}

export default SearchField;
