// import config from '../config';
import fetch from 'cross-fetch';
import store from 'store2';
import Parser from 'rss-parser';

import {
    fetchFeeds,
} from '../../actions/feed';

export function getFeed(data) {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = "http://rss.msnbc.msn.com/id/3032091/device/rss/rss"
    let parser = new Parser();

    return dispatch => {
      return parser.parseURL(proxyUrl+targetUrl)
        .then((response) => {
          console.log('data');
          dispatch(fetchFeeds({ data: response }));
        });
    }
  }