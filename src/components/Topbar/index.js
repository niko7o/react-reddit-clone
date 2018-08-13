import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const POST_BY = 'Posted by';
const baseClassName = 'Topbar';

export default class Topbar extends Component {

    static propTypes = {
        subreddit: PropTypes.string,
        subredditImage: PropTypes.string, // Other possible proptypes: bool, object, shape
        category: PropTypes.string,
        author: PropTypes.string,
        title: PropTypes.string,
        votes: PropTypes.number
    };

    static defaultProps = {
        subreddit: undefined,
        subredditImage: undefined,
        category: undefined,
        author: undefined,
        title: undefined,
        votes: undefined    
    }
    
    render() {
        const {
            subreddit,
            subredditImage,
            category,
            author,
            title,
            votes,
        } = this.props; // Destructuring again

        return (
            <React.Fragment>
                <div className={baseClassName}>
                    <div className="postInfo">
                        <div className="votes">{votes}</div>
                        <img className="avatar" src={subredditImage} alt="subreddit"/>
                        <h4 className="subreddit">r/{subreddit}</h4>
                        <span className="author">{`${POST_BY} ${author}`}</span>
                    </div>
                    <div className="information">
                        <span className="tag">{category}</span><h1 className="title">{title}</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}