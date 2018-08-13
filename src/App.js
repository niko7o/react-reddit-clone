import React, { Component } from 'react';
import RedditPost from './components/RedditPost'
import './App.css';

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