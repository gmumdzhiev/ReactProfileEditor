import React, { Component } from 'react';
import { connect } from 'react-redux';
import StateForm from './StateForm.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <StateForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  firstName: state.name,
  lastName: state.name,
  age: state.age,

})

export default connect(mapStateToProps)(App);
