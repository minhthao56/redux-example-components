import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import { HeaderBar } from "./components";
import { Home } from "./containers";

export class App extends Component {
  render() {
    const { color } = this.props;
    return (
      <div className="App">
        <HeaderBar backgroundColor={color.color} />
        <Home />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  color: state.changeColors,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
