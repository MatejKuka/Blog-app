import React from 'react';
import Image from 'next/image';
import ReactMarkdown from "react-markdown";

function Article({title, text, image, published, category}) {

    return (
        <div className={"p-4"}>
            <h1 className={"text-5xl"}>{title}</h1>
            <h3 className={"my-2"}>{published}</h3>
            <h2 className={"my-2 uppercase font-bold text-2xl text-gray-500 "}>{category}</h2>
            <div className={"relative w-11/12 h-[50rem] my-8 mx-auto"}>
                <Image
                    className={"object-cover"}
                    fill
                    alt={"Article Image"}
                    src={image}
                />
            </div>
            <ReactMarkdown className={"text-left text-2xl mx-4"}>{text}</ReactMarkdown>
        </div>
    );
}

export default Article;