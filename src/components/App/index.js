import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeText,
} from '../../actions';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    this.setState(nextProps.counter);
  }

  changeText(event) {
    this.setState({ value: event.target.value })
  }

  submit() {
    this.props.initSubmit(this.state);
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="inputEmailField">Email</label>
            <input id="inputEmailField" type="text" className="form-control" value={this.state.value} onChange={this.changeText}>
            </input>
          </div>

          <button type="button" className="btn btn-success" style={{ marginBottom: '1px' }} onClick={this.submit}>Submit</button>
          
        </form>
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
      dispatch(changeText(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
