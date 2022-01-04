import {Stack, TextField} from "@mui/material";
import React, {useCallback, useMemo, useState} from "react";
import Button from "@mui/material/Button";
import {PersonSearchRounded} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {searchUser} from "../../../shared/api/search-user-by-name/modal";


export default function SearchUser(factory, deps) {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    const handleOnChangeSearch = (event) => {
        setSearch(event.target.value)
    };

    const handleOnSearch = useCallback(() => {

      dispatch(searchUser(search));

    }, [search]);







    const isButtonDisabled = useMemo(() => {
        if (search !== "") {
            return false;
        }
        return true;
    }, [search]);


    return (
        <Stack spacing={1} direction="row">
            <TextField
                value={search}
                onChange={handleOnChangeSearch}

            />
            <Button endIcon={<PersonSearchRounded/>}
                    variant="outlined"
                    disabled={isButtonDisabled}
                    onClick={handleOnSearch}
            >
                поиск
            </Button>
        </Stack>
    );
};