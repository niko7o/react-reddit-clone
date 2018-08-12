// High order component example

import React from 'react';
import PropTypes from 'prop-types';

export default class VoteSystem extends React.Component {
    static propTypes = {
        votes: PropTypes.number,
        renderChildren: PropTypes.func,
    }

    static defaultProps = {
        votes: 0,
        renderChildren: () => {},
    }

    state = {
        votes: this.props.votes,
    }
    
    increaseVotes = () => {
        this.setState(prevState => ({
            votes: prevState.votes + 1,
        }))
    }

    decreaseVotes = () => {
        this.setState(prevState => ({
            votes: prevState.votes - 1,
        }))
    }

    render() {
        const childrenProps = {
            ...this.props,
            votes: this.state.votes,
            increaseVotes: this.increaseVotes,
            decreaseVotes: this.decreaseVotes,
        }

        return (
            <React.Fragment>
                {this.props.renderChildren(childrenProps)}
            </React.Fragment>
        )
    }
}