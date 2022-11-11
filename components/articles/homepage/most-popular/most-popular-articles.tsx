import React, {useEffect} from 'react';
import styles from "../../../../styles/MostPopularArticles.module.css";
import {Grid, Divider} from "@mui/material";
import useFetch from "../../../../hooks/useFetch";
import Image from 'next/image';
import {SmallArticleItem, LargeArticleItem} from "./ArticleItem";


function MostPopularArticles() {
    const {data, isLoading, error} = useFetch("http://localhost:1337/api/articles?populate=*");

    useEffect(() => {
        if (data) {
            console.log(data)
        }
    }, [data]);

    return (
        <div className={styles.container}>
            <h2>MOST POPULAR</h2>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    {data ? (<>
                            <SmallArticleItem
                                slug={data[1].id}
                                category={data[1].attributes.category.data.attributes.category}
                                title={data[1].attributes.title}
                                imageURL={data[1].attributes.image.data.attributes.url}/>
                            <Divider sx={{margin: "1rem"}}/>
                            <SmallArticleItem
                                slug={data[2].id}
                                category={data[2].attributes.category.data.attributes.category}
                                title={data[2].attributes.title}
                                imageURL={data[2].attributes.image.data.attributes.url}/>
                        </>
                    ) : null}
                </Grid>
                <Grid item md={8}>
                    <div>
                        {data ? (
                            <LargeArticleItem
                                slug={data[0].id}
                                category={data[0].attributes.category.data.attributes.category}
                                title={data[0].attributes.title}
                                imageURL={data[0].attributes.image.data.attributes.url}/>
                        ) : null}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default MostPopularArticles;
