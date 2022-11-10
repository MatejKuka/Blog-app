import React from 'react';
import useFetch from "../../hooks/useFetch";
import ArticlePreview from "./ArticlePreview";

function ArticleList() {
    const {data, isLoading, error} = useFetch("http://localhost:1337/api/articles");


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <div>
            {data?.map(article => (<ArticlePreview
                    key={article.id}
                    title={article.attributes.title}
                    category={article.attributes.category}
                    text={article.attributes.text}
                    published={article.attributes.publishedAt}
                    image={article.attributes.image}
                    slug={article.id}
                />
            ))}
        </div>
    );
}

export default ArticleList;
