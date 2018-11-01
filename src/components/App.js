import React, { Component, Fragment } from "react";
import Search from "../components/Search";
import Repos from "../components/Repos";
import { Provider } from "react-redux";
import store from "../stores";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Search />
          <Repos />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
