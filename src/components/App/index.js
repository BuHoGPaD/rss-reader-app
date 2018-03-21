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
    this.numberList = this.numberList.bind(this);

    this.state = {
        value: '',
        feeds: []
    }
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    console.log(nextProps.feed);
    this.setState({ feeds: nextProps.feed });
  }

  componentWillMount() {
    this.props.initGetFeed();
  }

  changeText(event) {
    this.setState({ value: event.target.value })
  }

  submit() {
    // this.props.initSubmit(this.state);
    // this.props.initGetFeed();
  }

  numberList(props) {
    // const numbers = props.numbers;
    debugger;
    var numbers = [];
    if(this.state.feeds && this.state.feeds.data) {
      numbers = this.state.feeds.data.items;
    }
    const listItems = numbers.map((number) =>
      <li key={number.guid}>
        <div className="card">
          <div className="card-header">
            {number.title}
          </div>
          <ul className="list-group list-group-flush">
            {/* <li className="list-group-item">{number.content}</li> */}
            <li className="card-text">{number.contentSnippet}</li>
            {/* <li className="list-group-item">{number.isoDate}</li> */}
            <p className="list-group-item"><a href={number.link}>Link</a> | Date: {number.pubDate} | Categories: {number.categories[0]}</p>
          </ul>
        </div>
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  render() {



    return (
      <div className="container">
        {/* <button type="button" className="btn btn-primary" onClick={this.submit}>Primary</button> */}
        <div className="row flex-xl-nowrap w-50 shadow">
          <div className="col">
            {this.numberList()}  
          </div>
        </div>
        

        {/* <ul class="list-group" >
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul> */}

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
