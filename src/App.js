import React, { Component } from 'react';
import './App.css';
import store from './redux/store'
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
        { this.props.comments.length }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state
})

export default connect(mapStateToProps)(App);
