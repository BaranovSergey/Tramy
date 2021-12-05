import React from "react";
import {Route, Routes} from 'react-router-dom';
import SignIn from "../components/authorization/login";
import LinaerStepper from "../components/stepper/LinaerStepper";
import Test from "../components/test"
const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/login" element={SignIn}/>
            <Route path="/marhruts" element={LinaerStepper} />
            <Route path="/test" element={Test} />
        </Routes>
    );
};
export default MyRoutes;