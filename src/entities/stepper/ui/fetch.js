// import {url} from "../../../shared/confing/url";
// import {setAuthenticatedUser} from "../../../page/login/modal/reducer";
// import search from "./searchUser"
//
// export let searchUser = (search) => async (dispatch) => {
//     const urlAuth = `${url}/User/FindUsers`;
//     const userToken = getState().auth.accessToken;
//
//     const body = {
//         myId: userToken,
//         search: value
//     };
//     const config = {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         headers: {
//             'accept': 'text/plain',
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         referrerPolicy: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(body) // body data type must match "Content-Type" header
//     };
//     fetch(urlAuth, config)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             dispatch(setAuthenticatedUser({data:data}));
//         })
//         .then(body.console.log)
// }