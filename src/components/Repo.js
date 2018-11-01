import React, { Component } from "react";

export default class Repo extends Component {
  render() {
    const { index, repo } = this.props;
    return (
      <li key={index}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </li>
    );
  }
}
