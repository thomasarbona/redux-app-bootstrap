import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ActionCreators from '../state/actions';
import { getIsSetup } from '../state/selectors';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.actions.setupApp();
  }

  render() {
    return (
      <div className="App">
        <span>isSetup: {this.props.isSetup ? "OK" : "KO"} </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("debug:", state);
  return {
    isSetup: getIsSetup(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
