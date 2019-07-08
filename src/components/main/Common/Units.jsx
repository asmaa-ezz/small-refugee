import React, { Component } from "react";
import { connect } from "react-redux";
import { GetAllUnits } from "../../../store/action/actionCreator/actionLesson";

class Units extends Component {
  componentDidMount() {
    this.props.GetAllUnits(this.props.id);
  }
  handleUnit = (id, title) => {
    const { history } = this.props;
    history.push(`/learn/${title}/${id}`);
  };
  render() {
    const render = this.props.units ? (
      <div>
        <h2>{this.props.units.title}</h2>
        {this.props.units.unit_set.map(item => {
          return (
            <div
              key={item.id}
              onClick={() => this.handleUnit(item.id, this.props.units.title)}
              style={{ cursor: "pointer" }}
            >
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    return <React.Fragment>{render}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    units: state.lesson.units
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetAllUnits: id => dispatch(GetAllUnits(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Units);
