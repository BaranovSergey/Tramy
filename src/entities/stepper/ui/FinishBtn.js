import React from "react";
import {Button} from "@mui/material";
import {fetchAddHike, testDataFoRequest} from "../../../feature/adding-hike/modal";
import {useDispatch} from "react-redux";

const FinishBtn = () =>{
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(fetchAddHike(testDataFoRequest))
  }
  return(
    <Button variant={"contained"} onClick={handleOnClick}>
      Завершить
    </Button>
  );
};

export default FinishBtn;