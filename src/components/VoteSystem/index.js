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
        debugger;
        this.setState(prevState => ({
            votes: prevState.votes + 1,
        }), () => {
            console.log(this.state)
        })
    }

    decreaseVotes = () => {
        console.log(prevState.votes)
        this.setState(prevState => ({
            votes: prevState.votes - 1,
        }), () => {
            console.log(this.state)
        })
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