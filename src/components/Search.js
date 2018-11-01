import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetching, fetchError, fetchSuccess } from "../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this._fetchRepos = this._fetchRepos.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = {
      username: "hungthai1401"
    };
  }
  _onChange(event) {
    const target = event.target;
    this.setState({
      username: target.value
    });
  }
  _fetchRepos() {
    this.props.fetchRepositories(this.state.username);
  }
  render() {
    return (
      <Fragment>
        <strong>Github username: </strong>
        <input
          name="username"
          type="text"
          value={this.state.username}
          placeholder="Github username..."
          onChange={this._onChange}
        />
        <button onClick={this._fetchRepos}>Get Lastest Repos</button>
      </Fragment>
    );
  }
}

const fetchRepos = username => async dispatch => {
  dispatch(fetching());
  await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        return dispatch(fetchError());
      }
      
      dispatch(fetchSuccess(data));
    })
    .catch(error => {
      dispatch(fetchError());
    });
};

const mapStateToProps = state => ({
  payload: state
});

const mapDispatchToProps = dispatch => ({
  fetchRepositories: username => dispatch(fetchRepos(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
