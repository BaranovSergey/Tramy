import * as React from 'react';
import UserProfile from "../../feature/personal-account-content/user-profile";
import PersonalAccountTable from "../../feature/personal-account-content/personal-account-content";
import SelectedFriends from "../../feature/personal-account-content/selected-friends";
import {Box} from "@mui/material";
import PersonalAccountSwitchContent from "../../feature/personal-account-content/personal-account-switch-content";


const PersonalAccount = () => {

    return (
        <Box sx={{display: 'flex'}}>
            <UserProfile/>
            <PersonalAccountSwitchContent/>
        </Box>
    )
}
export default PersonalAccount;