import React, {useEffect} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {SEARCH_MOCK_DATA} from "../../mock-data/search-mock";
import {TextField} from "@mui/material";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";

function Navigation() {
    const {data} = useFetch(`http://localhost:1337/api/categories`);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className={"flex sticky justify-start bg-white p-[10px] w-full top-0 z-10 shadow-md"}>
            <h1 className={"text-4xl m-3"}>.MKNotes</h1>
            <div className={"grow"}>
                <ul>
                    {data?.map(category => (
                        <li className={"inline-block uppercase m-4 text-2xl hover:text-cyan-500"}>
                            <Link
                                href={`/category/${category.attributes.category}}`}>
                                {category.attributes.category}
                            </Link>
                        </li>))}
                </ul>
            </div>
            <div className={"w-[12rem] h-[1rem]"}>
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
                            className={"searchtextfield "}
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