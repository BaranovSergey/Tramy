import * as React from 'react';
import PersonalAccountTable from "../../feature/personal-account-content/personal-account-content";
import SelectedFriends from "../../feature/personal-account-content/selected-friends";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Box} from "@mui/material";

const PersonalAccountSwitchContent = () => {

    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
        console.log(checked,"checked")
    };

    return (
        <Box sx={{
            flexDirection: "flex-direction",
            width: "100%",
            height: "100%",
        }}>
           <div style={{
               position: "absolute",
               right: 0
           }}>
               <FormControlLabel control={<Switch defaultChecked />} label="Ваши маршруты" onChange={toggleChecked} />
           </div>

            {checked ? <PersonalAccountTable/> : <SelectedFriends/>}

        </Box>
    )
}
export default PersonalAccountSwitchContent;