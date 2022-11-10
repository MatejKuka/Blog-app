import React from 'react';
import styles from "../../../../styles/MRecentArticleItem.module.css";
import Image from 'next/image'
import Link from "next/link";
import {Grid} from "@mui/material";

const API_URL = "http://localhost:1337"

function ArticleItem(props) {
    return (
        <Link href={`articles/${props.slug}`}>
            <div className={styles.box}>
                <Grid container>
                    <Grid item md={7}>
                        <h2>{props.title}</h2>
                        <p>{props.category}</p>
                    </Grid>
                    <Grid item md={1}/>
                    <Grid item md={4}>
                        <Image
                            width={100}
                            height={100}
                            src={`${API_URL}${props.image}`} alt={"Article picture"}
                        />
                    </Grid>
                </Grid>
            </div>
        </Link>
    );
}

export default ArticleItem;

