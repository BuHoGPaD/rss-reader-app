import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeText,
} from '../../actions/counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { getFeed } from '../../api/rssFeed';

class Login extends Component { 
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
        value: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.feed);
    this.setState(nextProps.feed);
  }

  changeText(event) {
    this.setState({ value: event.target.value })
  }

  submit() {
    // this.props.initSubmit(this.state);
    this.props.initGetFeed();
  }

  render() {
    return (
      <div className="container">
        <button type="button" className="btn btn-primary" onClick={this.submit}>Primary</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    initSubmit: (data) => {
        data = "asdas";
        dispatch(changeText(data));
    },

    initGetFeed: () => {
        getFeed()(dispatch);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
