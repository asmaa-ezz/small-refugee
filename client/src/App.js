import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
// import Main from "./components/Main.jsx";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          {/* <Main /> */}
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
