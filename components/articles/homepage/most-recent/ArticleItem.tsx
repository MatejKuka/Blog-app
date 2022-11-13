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
                    <Grid item xs={6} md={7}>
                        <h1>{props.title}</h1>
                        <p>{props.category}</p>
                    </Grid>
                    <Grid item xs={2} md={1}/>
                    <Grid item xs={4} md={4}>
                        <div className={styles.imagecontainer}>
                            <Image
                                className={styles.image}
                                fill
                                src={`${API_URL}${props.image}`} alt={"Article picture"}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Link>
    );
}

export default ArticleItem;

