import {url} from "../../../confing/url";
import {setFoundUsers} from "../../reducers/search-users/modal";


export const searchUser = (searchUser) => async (dispatch, getState) => {
    const urlAuth = `${url}/User/FindUsers`;

    const userToken = getState().auth.accessToken;
    const userId = getState().auth.id;

    const body = {
        myId: userId,
        search: searchUser
    };

    const config = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(body) // body data type must match "Content-Type" header
    };

    fetch(urlAuth, config)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            dispatch(setFoundUsers({data: data}));
        })
        .catch(e => {
            console.error(e)
        })
}