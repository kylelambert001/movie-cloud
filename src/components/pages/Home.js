import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/homeActions";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTrendingMovies();
    this.props.getTrendingShows();
  }

  componentWillUnmount() {
    this.props.resetHomeState();
  }

  render() {
    return <div>home page</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrendingMovies: () => dispatch(actions.getTrendingMovies()),
    getTrendingShows: () => dispatch(actions.getTrendingShows()),
    resetHomeState: () => dispatch(actions.resetHomeState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
