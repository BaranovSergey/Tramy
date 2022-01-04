import React, {useEffect} from 'react';
import FDisplayHikeCards from "../../../feature/display-hike-card/ui";
import {useDispatch, useSelector} from "react-redux";
import {getAllHike} from "../../../shared/api/reducers/hike/modal/fetch";
import {Typography} from "@mui/material";

const AllHike = () => {
    const dispatch = useDispatch();

    const allHike = useSelector(state => state.hike.allHikes);
    useEffect(() => {
        //    у нас будет загрузка всех hike
        dispatch(getAllHike(10,1));
    }, []);

    if (allHike.length === 0) {
        return (<Typography variant={'h3'}>Никаких походов нет</Typography>)
    }
    return (
        <FDisplayHikeCards allHikes={allHike}/>
    );
};

export default AllHike;