// import config from '../config';
import fetch from 'cross-fetch';
import store from 'store2';
import Parser from 'rss-parser';

import {
    fetchFeeds,
} from '../../actions/feed';

export function getFeed(data) {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    // targetUrl = 'http://www.nasa.gov/rss/dyn/breaking_news.rss'
    targetUrl = "http://rss.msnbc.msn.com/id/3032091/device/rss/rss"

    let parser = new Parser();
    
    
    return dispatch => {
      // return fetch(proxyUrl+targetUrl, {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/rss+xml',
      //     },
      //   })
      //   .then((response) => {
      //     return response.text();
      //   })
      //   .then(text => {
      //       debugger;
      //       dispatch(fetchFeeds({ data: text }));
      //   });

        return parser.parseURL(proxyUrl+targetUrl)
          .then((response) => {
            debugger;
            dispatch(fetchFeeds({ data: response }));
          })



    }
  }