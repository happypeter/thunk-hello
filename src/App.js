import React, { Component } from 'react';
import './App.css';
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <div>
        { store.getState().length }
      </div>
    );
  }
}

export default App;
