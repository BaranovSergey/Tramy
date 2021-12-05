import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import SignIn from "../page/login/ui/login";
import LinaerStepper from "../entities/stepper/ui/LinaerStepper";
import Test from "../components/test";
import MasterLayout from "../layout/MasterLayout";

const MyRoutes = () => {
  const isUserAuthenticated = useSelector(state => state.auth.accessToken);

  return (
    <Routes>
      {(() => {
        if (isUserAuthenticated){
          return (<Route
            path="*"
            element={<Navigate to="/" />}
          />);
        }
        else {
          return (<Route path='*' element={<Navigate to={'/login'}/>}/>);
        }
      })()}
        {/*master layout*/}
        <Route path="/marhruts" element={<MasterLayout><LinaerStepper/></MasterLayout>}/>
        <Route path="/" element={<MasterLayout><Test/></MasterLayout>}/>
        {/*sub layout*/}
        <Route path="/login" element={<SignIn/>}/>
    </Routes>
  );
};
export default MyRoutes;
