import React from "react";
import {Route, Routes} from 'react-router-dom';
import SignIn from "../../page/login/ui/login";
import LinaerStepper from "../../entities/stepper/ui";
import MasterLayout from "../../layout/MasterLayout";
import AllHike from "../../page/hike/ui";
import PersonalAccount from "../../page/personal-account/personal-account";

const MyRoutes = () => {

    return (
        <Routes>
            <Route path="/personal-account" element={<MasterLayout><PersonalAccount/></MasterLayout>}/>
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
