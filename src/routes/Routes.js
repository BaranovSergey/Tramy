import React from "react";
import {Route, Routes} from 'react-router-dom';
import SignIn from "../page/login/ui/login";
import LinaerStepper from "../entities/stepper/ui/LinaerStepper";
import Test from "../components/test";
import MasterLayout from "../layout/MasterLayout";

const MyRoutes = () => {
  return (
    <Routes>
      {/*sub layout*/}
      <Route path="/login" element={<SignIn/>}/>
      {/*master layout*/}
      <Route path="/marhruts" element={<MasterLayout><LinaerStepper/></MasterLayout>}/>
      <Route path="/" element={
        <MasterLayout>
          <Test/>
        </MasterLayout>}/>
    </Routes>
  );
};
export default MyRoutes;
