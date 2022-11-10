import React, {useEffect} from 'react';
import styles from "../../../../styles/MostRecentArticles.module.css";
import useFetch from "../../../../hooks/useFetch";
import ArticleItem from "./ArticleItem";


function MostRecentArticles(props) {
    const {data, isLoading, error} = useFetch("http://localhost:1337/api/articles?populate=*");

    useEffect(()=>{
        if (data) {
            console.log(data)
        }
    }, [data])
    return (
        <div className={styles.container}>
            <h2>MOST RECENT</h2>
            {data?.map(article => (<ArticleItem
                    key={article.id}
                    title={article.attributes.title}
                    category={article.attributes.category.data.attributes.category}
                    text={article.attributes.text}
                    published={article.attributes.publishedAt}
                    image={article.attributes.image.data.attributes.url}
                    slug={article.id}
                />
            ))}
        </div>
    );
}

export default MostRecentArticles;