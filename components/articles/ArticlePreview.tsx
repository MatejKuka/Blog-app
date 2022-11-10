import React from 'react';
import styles from "../../styles/Article.module.css"
import Link from "next/link";

const ArticlePreview = ({title, text, published, image, category, slug}) => {
    return (
        <Link href={`articles/${slug}`}>
            <div className={styles.article_container}>
                <h1>{title}</h1>
                <h2>{category}</h2>
                <p>{published}</p>
            </div>
        </Link>

    );
}

export default ArticlePreview;