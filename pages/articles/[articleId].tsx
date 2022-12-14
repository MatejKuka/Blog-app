import React, {useEffect} from 'react';
import Article from "../../components/articles/Article";
import {useRouter} from "next/router";
import useFetch from "../../hooks/useFetch";
import Navigation from "../../components/UI/Navigation";
import {Grid} from "@mui/material";


const url = "http://localhost:1337"

function ArticleId() {

    const router = useRouter();
    const {articleId} = router.query;

    const {data, isLoading, error} = useFetch(`http://localhost:1337/api/articles/${articleId}?populate=*`);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])

    return (
        <div className="m-2">
            <Navigation/>
            <Grid container spacing={1}>
                <Grid item lg={8}>
                    {data && <Article
                        category={data.attributes.category.data.attributes.category}
                        title={data.attributes.title}
                        text={data.attributes.text}
                        published={data.attributes.publishedAt}
                        image={`${url}${data.attributes.image.data.attributes.url}`}
                    />}
                </Grid>
                <Grid item lg={4}>
                    <div>sdadasdas</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ArticleId;