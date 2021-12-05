// import axios from "axios";
//
//
// export const login = async (username, password) => {
//         try {
//             const response = await axios.post(`https://tramy.life/api/Auth/Token`, {
//                 username,
//                 password
//             })
//             alert(response.data.message)
//         } catch (e) {
//             alert(e.response.data.message)
//         }
//     }
export const login = (userName, password) => {
    const url = 'https://tramy.life/api/Auth/Token';
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
    fetch(url, config)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
}