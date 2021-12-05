import React from "react";
import {Button} from "@mui/material";
import {fetchAddHike, testDataFoRequest} from "../../../feature/adding-hike/modal";
import {useDispatch} from "react-redux";

const NextBtn = ({handleNextStep}) =>{

  return(
    <Button variant={"contained"}
            onClick={handleNextStep}
    >
      Следуюющий шаг
    </Button>
  );
};

export default NextBtn;
