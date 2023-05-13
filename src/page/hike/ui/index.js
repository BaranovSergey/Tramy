import React, {useEffect} from 'react';
import FDisplayHikeCards from "../../../feature/display-hike-card/ui";
import {useDispatch, useSelector} from "react-redux";
import {getAllHike} from "../../../shared/api/reducers/hike/modal/fetch";
import {Typography} from "@mui/material";
import MediaCard from "../../../test/CardHike";
import Album from "../../../test/CardHike";

const AllHike = () => {
    const dispatch = useDispatch();

    const allHike = useSelector(state => state.hike.allHikes);
    useEffect(() => {
        //    у нас будет загрузка всех hike
        dispatch(getAllHike(20,0));
    }, []);
    if (allHike.length === 0) {
        return (<Typography variant={'h3'}>Никаких походов нет</Typography>)
    }

    return (
            <Album/>
    );
};

export default AllHike;