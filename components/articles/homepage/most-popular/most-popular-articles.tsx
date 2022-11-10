import React, {useEffect} from 'react';
import styles from "../../../../styles/MostPopularArticles.module.css";
import {Grid} from "@mui/material";
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
                    ds
                </Grid>
                <Grid item md={8}>
                    <div>
                        {data ? (
                            <Link href={`articles/${data[0].id}`}>
                                <div className={styles.firstcontainer}>
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
