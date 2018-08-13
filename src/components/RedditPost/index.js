import React, { Component } from 'react';

import Topbar from '../Topbar';
import Content from '../Content';
import BottomBar from '../BottomBar';

import './styles.css';

const getApiResponse = () => ({
    subreddit: 'OnePiece',
    subredditImage: 'https://b.thumbs.redditmedia.com/prxU2Rr_m4w0UCpRmIO6h-FY9J-P09IudQD_EYDJ-Dc.png',
    category: 'Misc',
    author: 'Nikoto',
    title: 'Minimalist One Piece wallpaper',
    votes: 527,
    content: {
        image: 'https://i.redd.it/we962gwu1nf11.jpg',
        text: null
    },
    comments: 50,
    upvoteRatio: 94
  })

export default class RedditPost extends Component {
    state = {}

    // Simulate API Request and set it once component is mounted
    componentDidMount() {
        const apiResponse = getApiResponse();

        this.setState(apiResponse);
    }

    render() {
        const baseClassName = this.constructor.name; // This gets the class name of our javascript file
        
        const {
            subreddit,
            subredditImage,
            category,
            author,
            title,
            votes,
            content,
            comments,
            upvoteRatio,
        } = this.state; // Destructuring

        return (
            <div className={baseClassName}>
                <Topbar 
                  subreddit={subreddit}
                  subredditImage={subredditImage}
                  category={category}
                  author={author}
                  title={title}
                  votes={votes}
                />
                <Content content={content} />
                <BottomBar 
                    comments={comments}
                    upvoteRatio={upvoteRatio}
                />
                
            </div>
        )
    }
}