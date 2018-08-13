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

    //@TO-DO: Fix the "null" issue when trying to set state to +1
    increaseVotes = (prevState) => {
        this.setState((prevState) => {
            return { votes: prevState.votes + 1 }
        })
    }

    render() {
        const {
            subreddit,
            subredditImage,
            category,
            author,
            title,
            votes,
        } = this.props; // Destructuring

        return (
            <React.Fragment>
                <div className={baseClassName}>
                    <div className="Topbar_postInfo">
                        <div className="Topbar_votes">
                            <button onClick={ this.increaseVotes }>+</button>
                            <p className="Topbar_voteNumber">{ votes }</p>
                            <button>-</button>
                        </div>
                        <div className="Topbar_details">
                            <img className="Topbar_avatar" src={ subredditImage } alt="subreddit" />
                            <h4 className="Topbar_subreddit">r/{ subreddit }</h4>
                            <span className="Topbar_author">{`${POST_BY} ${ author }`}</span>
                        </div>
                    </div>
                    <div className="Topbar_information">
                        <span className="Topbar_tag">{ category }</span><h1 className="Topbar_title">{ title }</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}