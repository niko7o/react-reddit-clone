import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BottomBar = ({ comments, upvoteRatio }) => (
    // Always return only one father Div, or React.Fragment if no classes are needed
    <div>
        <div>
            <span>{comments} Comments</span>
            <span>Share</span>
            <span>Give gold</span>
        </div>

        <div>
            <span>{upvoteRatio}% upvotes</span>
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