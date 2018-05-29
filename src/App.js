import React, { Component } from 'react';
import { connect } from 'react-redux';
import StateForm from './StateForm.js';
//import {newProfile} from './store/account.js'
import './App.css';

class App extends Component {
  componentWillMount() {
    // this.props.dispatch(newProfile())
  }


  render() {
    /* const {
       firstName,
       lastName,
       age,
       sex,
       employed,
       bio,
     } = this.props*/

    if (true) {
      return <div> You have succesfully registrated </div>
    }
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
