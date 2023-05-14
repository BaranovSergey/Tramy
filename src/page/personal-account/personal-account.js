import * as React from 'react';
import UserProfile from "../../feature/personal-account-content/user-profile";
import PersonalAccountTable from "../../feature/personal-account-content/personal-account-content";
import SelectedFriends from "../../feature/personal-account-content/selected-friends";


const PersonalAccount = () => {

    return (
        <div>
            <UserProfile/>
            <PersonalAccountTable/>
            <SelectedFriends/>
        </div>
    )
}
export default PersonalAccount;