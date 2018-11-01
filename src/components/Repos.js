import React, { Component } from "react";
import Repo from "./Repo";
import { connect } from "react-redux";

class Repos extends Component {
  render() {
    const { fetching, repos, error } = this.props.payload;
    if (error) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (fetching) {
      return <p>Loading ...</p>;
    }

    return (
      <ul>
        {repos.map((repo, index) => {
          return <Repo key={index} repo={repo} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  payload: state
});

export default connect(mapStateToProps)(Repos);
