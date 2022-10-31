import React from 'react';
import useFetch from "../../hooks/useFetch";
import Article from "./Article";

function ArticleList() {
    const {data, isLoading, error} = useFetch("http://localhost:1337/api/articles");

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <div>
            {data?.map(article => (<Article
                    key={article.id}
                    title={article.title}
                    text={article.text}
                    published={article.published}
                    image={article.image}/>
            ))}
            <Article title={"GEGE"} text={"fsdfsdfd"} published={"dfsfsd"} image={"sdaf"}/>
        </div>
    );
}

export default ArticleList;
//TODO data.map dies not work