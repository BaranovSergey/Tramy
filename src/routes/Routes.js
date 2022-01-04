import React from "react";
import {Route, Routes} from 'react-router-dom';
import SignIn from "../page/login/ui/login";
import LinaerStepper from "../entities/stepper/ui";
import MasterLayout from "../layout/MasterLayout";
import AllHike from "../page/hike/ui";

const MyRoutes = () => {

    return (
        <Routes>

            {/*master layout*/}
            <Route path="/" element={<MasterLayout><LinaerStepper/></MasterLayout>}/>
            <Route path="/marhruts" element={<MasterLayout><LinaerStepper/></MasterLayout>}/>
            <Route path="/all-hike" element={<MasterLayout><AllHike/></MasterLayout>}/>
            {/*sub layout*/}
            <Route path="/login" element={<SignIn/>}/>
        </Routes>
    );
};
export default MyRoutes;
