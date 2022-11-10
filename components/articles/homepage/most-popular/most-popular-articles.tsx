import React, {useEffect} from 'react';
import styles from "../../../../styles/MostPopularArticles.module.css";
import {Grid, Divider} from "@mui/material";
import useFetch from "../../../../hooks/useFetch";
import Image from 'next/image';
import Link from "next/link";

const API_URL = "http://localhost:1337"

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
                            <Link href={`articles/${data[1].id}`}>
                                <div className={styles.smallcontainer}>
                                    <Image width={280} height={150} alt={"Image"}
                                           src={`${API_URL}${data[1].attributes.image.data.attributes.url}`}/>
                                    <h3>{data[1].attributes.category.data.attributes.category}</h3>
                                    <h1>{data[1].attributes.title}</h1>
                                </div>
                            </Link>
                            <Divider sx={{margin: "1rem"}}/>
                            <Link href={`articles/${data[2].id}`}>
                                <div className={styles.smallcontainer}>
                                    <Image width={280} height={150} alt={"Image"}
                                           src={`${API_URL}${data[2].attributes.image.data.attributes.url}`}/>
                                    <h3>{data[2].attributes.category.data.attributes.category}</h3>
                                    <h1>{data[2].attributes.title}</h1>
                                </div>
                            </Link>
                        </>
                    ) : null}
                </Grid>
                <Grid item md={8}>
                    <div>
                        {data ? (
                            <Link href={`articles/${data[0].id}`}>
                                <div className={styles.largecontainer}>
                                    <Image width={550} height={350} alt={"Image"}
                                           src={`${API_URL}${data[0].attributes.image.data.attributes.url}`}/>
                                    <h3>{data[0].attributes.category.data.attributes.category}</h3>
                                    <h1>{data[0].attributes.title}</h1>
                                </div>
                            </Link>
                        ) : null}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default MostPopularArticles;
