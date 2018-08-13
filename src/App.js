import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentAlt, faShare, faStar } from '@fortawesome/free-solid-svg-icons'

import RedditPost from './components/RedditPost'

import './App.css';

library.add(faCommentAlt)
library.add(faShare)
library.add(faStar)

export default class App extends Component {
  render() {
    return (
      <div>
        <RedditPost />
        <RedditPost />
        <RedditPost />
      </div>
  );
  }
} 