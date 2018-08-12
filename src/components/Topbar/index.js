import React, { Component } from 'react';
import PropTypes from 'prop-types';

const POST_BY = 'Posted by';

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
                <div>
                    {votes}
                </div>
                <div>
                    <div>
                        <img src={subredditImage} alt="Subreddit image"/>
                        <h4>{subreddit}</h4>
                        <span>{`${POST_BY} ${author}`}</span>
                    </div>
                    <div>
                        <span>{category}</span>
                        <h1>{title}</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}