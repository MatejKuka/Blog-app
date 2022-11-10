import React, {useEffect} from 'react';
import Article from "../../components/articles/Article";
import {useRouter} from "next/router";
import useFetch from "../../hooks/useFetch";

const url = "http://localhost:1337"

function ArticleId() {

    const router = useRouter();
    const {  articleId } = router.query;

    const {data, isLoading, error} = useFetch(`http://localhost:1337/api/articles/${articleId}?populate=*`);

    useEffect(()=>{
        if (data) {
            console.log(data);
        }
    },[data])

    return (
        <div>
            {data && <Article
                title={data.attributes.title}
                text={data.attributes.text}
                published={data.attributes.publishedAt}
                image={`${url}${data.attributes.image.data.attributes.url}`}
            />}
        </div>
    )
}

export default ArticleId;