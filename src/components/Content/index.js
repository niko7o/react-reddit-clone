import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const baseClassName = 'Content';

const Content = ({ content }) => (
    <div className={baseClassName}>
        <p>{content.text}</p>
        {content.image &&
            <img src={content.image} alt="Content" />
        } 
    </div>
)

Content.propTypes = {
    content: PropTypes.shape({
        text: PropTypes.string,
        image: PropTypes.string
    })
}

Content.defaultProps = {
    content: {
        text: undefined,
        image: undefined
    }
}

export default Content;