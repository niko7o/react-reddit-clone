import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const POST_BY = 'Posted by';
const baseClassName = 'Topbar';

export default class Topbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            votes: undefined
        }
    }

    static propTypes = {
        subreddit: PropTypes.string,
        subredditImage: PropTypes.string,
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

    componentDidUpdate(prevProps) {
        if(this.props.votes !== prevProps.votes) {
            this.setState({ votes: this.props.votes })
        }
    }

    increaseVotes = () => {
        this.setState(prevState => ({
            votes: prevState.votes + 1,
        }));
    }

        
    decreaseVotes = () => {
        this.setState(prevState => ({
            votes: prevState.votes - 1,
        }));
    }

    render() {
        const {
            subreddit,
            subredditImage,
            category,
            author,
            title,
            // votes,
        } = this.props; // Destructuring

        const { votes } = this.state

        return (
            <React.Fragment>
                <div className={baseClassName}>
                    <div className="Topbar_postInfo">
                        <div className="Topbar_votes">
                            <button onClick={ this.increaseVotes }>+</button>
                            <p className="Topbar_voteNumber">{ votes }</p>
                            <button onClick={ this.decreaseVotes }>-</button>
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