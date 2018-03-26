import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeText,
} from '../../actions/counter';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { getFeed } from '../../api/rssFeed';

class Login extends Component { 
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.submit = this.submit.bind(this);
    this.numberList = this.numberList.bind(this);
    this.openFeedDetails = this.openFeedDetails.bind(this);
    this.selectFeedContent = this.selectFeedContent.bind(this);

    this.state = {
        value: '',
        feeds: [],
        selectedFeed: ''
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

  selectFeedContent(id) {
    const items = this.state.feeds.data.items;

    const guidArray = items.map( (item) => item.guid);
    const index = guidArray.indexOf(id);
    const selectedItem = items[index];
    return selectedItem;
  }

  openFeedDetails(id) {
    debugger;
    if(id) {
      const content = this.selectFeedContent(id);
      this.setState({ selectedFeed: content });
    }
  }

  numberList(props) {
    var numbers = [];
    if(this.state.feeds && this.state.feeds.data) {
      numbers = this.state.feeds.data.items;
    }
    const listItems = numbers.map((number) =>
      <li key={number.guid}>
        <div className="card" onClick={ () => this.openFeedDetails(number.guid)}>
          <div className="card-header">
            {number.title}
          </div>
        </div>
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  /*
    content, contentSnippet, isoDate, link, pubDate, categories
  */

  render() {
    debugger;
    let selectedFeedContainer = '';
    if(this.state.selectedFeed) {
      selectedFeedContainer = (
        <ul>
          <li>{ this.state.selectedFeed.title }</li>
        </ul>
      )
    }
    

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <div className="container" style={{ paddingTop: '90px'}}>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-6">
              {this.numberList()}  
            </div>
            <div className="col-4">
              { selectedFeedContainer }
            </div>
          </div>
        </div>
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
        console.log('getFeed');
        getFeed()(dispatch);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
