import {url} from "../../../shared/confing/url";
import {setAuthenticatedUser} from "./reducer";

export const login = (userName, password) => (dispatch) => {
    const urlAuth = `${url}/Auth/Token`;
    const body = {
        userName,
        password
    };
    const config = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(body) // body data type must match "Content-Type" header
    };
    fetch(urlAuth, config)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            dispatch(setAuthenticatedUser({data:data}));
        })
}
