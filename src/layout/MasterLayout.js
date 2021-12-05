import React from "react";
import {makeStyles} from '@mui/styles';
import Navbar from "../shared/ui/Navbar/navbar";

const useStyles = makeStyles(() => {
  return (
    {
      root: {
        width: '100%',
        height: '100%',
      },
      container:{
        backgroundColor: "red"
      }
    }
  )
});
/*children - то что передаешь внутырь <MasterLayout>КАКОЙ-ТО КОМОПОНЕНТ</MasterLayout>*/
const MasterLayout = ({children}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.container},`}>
      <Navbar/>
      {children}
    </div>
  );
};
export default MasterLayout;
