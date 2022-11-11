import styles from "../styles/Home.module.css";
import Navigation from "../components/UI/Navigation";
import {Grid, Divider} from "@mui/material";
import MostPopularArticles from "../components/articles/homepage/most-popular/most-popular-articles";
import MostRecentArticles from "../components/articles/homepage/most-recent/most-recent-articles";



export default function Home() {
    return (
        <div className={styles.container}>
            <Navigation/>
            <div className={styles.maincontainer}>
                <Grid container spacing={1} >
                    <Grid item lg={9} md={8}>
                        <MostPopularArticles/>
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{mr: "-1px"}}/>
                    <Grid item lg={3} md={4}>
                        <MostRecentArticles/>
                    </Grid>
                </Grid>
            </div>
            <Divider orientation="horizontal" variant="middle" sx={{marginTop: "7rem"}}/>
        </div>
    )
}
