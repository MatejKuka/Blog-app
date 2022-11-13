import styles from "../styles/Home.module.css";
import Navigation from "../components/UI/Navigation";
import {Grid, Divider, Box, Stack, Paper} from "@mui/material";
import MostPopularArticles from "../components/articles/homepage/most-popular/most-popular-articles";
import MostRecentArticles from "../components/articles/homepage/most-recent/most-recent-articles";

const TECHNOLOGY_USED = ["Next.js", "Material UI", "Strapi", "Tailwind", "GraphQL", "Apollo"];

export default function Home() {
    return (
        <>
            <Navigation/>
            <div className={styles.container}>
                <div className={styles.maincontainer}>
                    <Grid container spacing={1}>
                        <Grid item lg={9} md={8}>
                            <MostPopularArticles/>
                        </Grid>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{mr: "-1px"}}/>
                        <Grid item lg={3} md={4}>
                            <MostRecentArticles/>
                        </Grid>
                    </Grid>
                    <Divider orientation="horizontal" variant="middle" sx={{marginTop: "7rem"}}/>
                    <div>
                        <h4>Design inspired by WIRED site</h4>
                        <h3>Technologies and libraries used in this project:</h3>
                        <Stack
                            direction={{xs: 'column', sm: 'row'}}
                            spacing={{xs: 1, sm: 2, md: 3}}>
                            {TECHNOLOGY_USED.map(tech => (
                                <Paper elevation={3} sx={{padding: "0.5rem"}}>{tech}</Paper>
                            ))}
                        </Stack>
                    </div>
                </div>
            </div>
        </>

    )
}
