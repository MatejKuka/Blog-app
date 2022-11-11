import React from 'react';
import styles from "../../styles/Navigation.module.css"
import Autocomplete from '@mui/material/Autocomplete';
import {SEARCH_MOCK_DATA} from "../../mock-data/search-mock";
import {TextField} from "@mui/material";
import Link from "next/link";

function Navigation() {
    return (
        <div className={styles.navigationContainer}>
            <h1 className={styles.logo}>.MKNotes</h1>
            <div className={styles.categorylist}>
                <ul>
                    <li><Link href={"/category/politics"}>Politics</Link></li>
                    <li><Link href={"/category/business"}>Business</Link></li>
                    <li><Link href={"/category/society"}>Society</Link></li>
                    <li><Link href={"/category/technology"}>Technology</Link></li>
                    <li><Link href={"/category/others"}>Others</Link></li>
                </ul>
            </div>
            <div className={styles.searchBar}>
                <Autocomplete
                    fullWidth={true}
                    freeSolo
                    id="search-bar"
                    disableClearable
                    options={SEARCH_MOCK_DATA.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search input"
                            className={styles.searchtextfield}
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default Navigation;