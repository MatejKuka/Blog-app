import React from 'react';
import Image from 'next/image'

function Article(props) {
    console.log(props.image);

    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.published}</h3>
            <p>{props.text}</p>
            <Image width={100} height={100} alt={"Image"} src={props.image}/>
        </div>
    );
}

export default Article;