import React from 'react';

const Article = ({title, text, published, image}) => {
    return (
        <div>
            <div>{title}</div>
            <div>{text}</div>
            <div>{published}</div>
        </div>

    );
}

export default Article;