import React from "react";
import {Route, Routes} from 'react-router-dom';
import SignIn from "../page/login/ui/login";
import LinaerStepper from "../entities/stepper/ui";
import Test from "../components/test";
import MasterLayout from "../layout/MasterLayout";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const MyRoutes = () => {

    return (
        <Routes>

            {/*master layout*/}
            <Route path="/" element={<MasterLayout><Test/></MasterLayout>}/>
            <Route path="/marhruts" element={<MasterLayout><LinaerStepper/></MasterLayout>}/>
            {/*sub layout*/}
            <Route path="/login" element={<SignIn/>}/>
        </Routes>
    );
};
export default MyRoutes;
