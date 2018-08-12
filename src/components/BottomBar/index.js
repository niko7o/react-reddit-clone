import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const BottomBar = ({ comments, upvoteRatio }) => (
    // Always return only one father Div, or React.Fragment if no classes are needed
    <div>
        <div className="bottomBar">
            <span>{comments} Comments</span>
            <span>Share</span>
            <span>Give gold</span>
            <span className="upvotes">{upvoteRatio}% upvotes</span>
        </div>
    </div>
)

BottomBar.propTypes = {
    comments: PropTypes.number,
    upvoteRatio: PropTypes.number
}

BottomBar.defaultProps = {
    comments: undefined,
    upvoteRatio: undefined
}

export default BottomBar;