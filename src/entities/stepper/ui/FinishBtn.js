import React from "react";
import {Button} from "@mui/material";
import {fetchAddHike, testDataFoRequest} from "../../../feature/adding-hike/modal";
import {useDispatch} from "react-redux";
import {createHike, getHikeById} from "../../../shared/api/reducers/hike/modal/fetch";

const FinishBtn = ({handleOnSubmit}) => {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        // dispatch(fetchAddHike())
        handleOnSubmit();
        dispatch(createHike());
    }


    return (
        <Button variant={"contained"} onClick={handleOnClick}>
            Завершить
        </Button>
    );
};

export default FinishBtn;
