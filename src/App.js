import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchComments } from './redux/actions/commentActions'


class App extends Component {
  componentWillMount() {
    this.props.fetchComments();
  }
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

export default connect(mapStateToProps, { fetchComments })(App);
