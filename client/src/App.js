import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/main";
import IsUser from './components/IsUser'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <IsUser />
          <Header />
          <Main />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
