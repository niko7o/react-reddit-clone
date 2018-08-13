import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css'

const baseClassName = 'BottomBar';

const BottomBar = ({ comments, upvoteRatio }) => (
    // Always return only one father Div, or React.Fragment if no classes are needed
    <div className={baseClassName}>
        <div className="left">
            <span><FontAwesomeIcon icon="comment-alt" /> {comments} Comments</span>
            <span><FontAwesomeIcon icon="comment-alt" /> Share</span>
            <span><FontAwesomeIcon icon="star" /> Give gold</span>
        </div>
        <div className="right">
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