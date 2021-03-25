import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "../../components";
import { doChangeRadomColor } from "../../redux/actions/changeColors";
import "./Home.scss";

export class Home extends Component {
  handleChangeColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.props.doChangeRadomColor(`#${randomColor}`);
  };
  render() {
    const { color } = this.props;
    console.log("color", color);
    return (
      <div>
        <div>Home</div>

        <Button onClick={this.handleChangeColor} backgroundColor={color.color}>
          Change Header Color
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  color: state.changeColors,
});

const mapDispatchToProps = (dispatch) => {
  return {
    doChangeRadomColor: (value) => dispatch(doChangeRadomColor(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
