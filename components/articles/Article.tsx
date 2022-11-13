import React from 'react';
import Image from 'next/image';
import styles from "../../styles/Article.module.css";
import ReactMarkdown from "react-markdown";

function Article({title, text, image, published, category}) {

    return (
        <div className={styles.articlecontainer}>

            <h1>{title}</h1>
            <h3>{published}</h3>
            <h2>{category}</h2>
            <div className={styles.imagecontainer}>
                <Image
                    className={styles.image}
                    fill
                    alt={"Article Image"}
                    src={image}
                />
            </div>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    );
}

export default Article;