import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
