import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header";
import Main from "./components/main";
import { GetDataUser } from './store/action/actionCreator/actionAuth'

const dataStitic = {
  userImage:
    "https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png",
  fullName: "أسماء المدهون",
  stage: "طالب صف أول"
};

class App extends Component {
  componentDidMount() {
    this.props.GetDataUser();
  }
  render() {
    let dataStitic;
    this.props.user ? dataStitic = {
      userImage: this.props.user.avatar,
      fullName: `${this.props.user.first_name} ${this.props.user.last_name}`,
      stage: "طالب صف أول"
    } : dataStitic = null

    return (
      <React.Fragment>
        {localStorage.getItem("token") ?
          this.props.user ? (
            <BrowserRouter>
              <Header dataStitic={dataStitic} />
              <Main dataStitic={dataStitic} />
            </BrowserRouter>
          ) : (
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
            <BrowserRouter>
              <Header />
              <Main />
            </BrowserRouter>
          )}

      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    GetDataUser: () => dispatch(GetDataUser())
  };
};

const mapStatusToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(App);
