
import {Stack, TextField} from "@mui/material";
import React, {useState} from "react";
import Button from "@mui/material/Button";
import {PersonSearchRounded} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {searchUser} from "./fetch";
import {login} from "../../../page/login/modal/user";


export default function SearchUser() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("");
    const handleOnChangeSearch = (event) => {
        setSearch(event.target.value)
    };

    return(
            <Stack spacing={1} direction="row">
                <TextField
                    value={search}
                    onChange={handleOnChangeSearch}

                />
                <Button endIcon={<PersonSearchRounded/>} variant="outlined">поиск</Button>
            </Stack>
        )
}