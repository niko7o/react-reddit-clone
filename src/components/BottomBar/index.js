import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const baseClassName = 'BottomBar';

const BottomBar = ({ comments, upvoteRatio }) => (
    // Always return only one father Div, or React.Fragment if no classes are needed
    <div className={baseClassName}>
        <span>{comments} Comments</span>
        <span>Share</span>
        <span>Give gold</span>
        <span className="upvotes">{upvoteRatio}% upvotes</span>
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