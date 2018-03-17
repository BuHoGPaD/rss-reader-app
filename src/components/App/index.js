import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component { 

  render() {
    return (
      <div className="container">
        App
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
