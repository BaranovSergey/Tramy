import {url} from "../../../../confing/url";


export const getHikeById = (hikeId) => async (dispatch, getState) => {
    const userToken = getState().auth.accessToken;
    /*
    * что бы получить данные по какому-то hike тебе нужно
    * понять что это за id
    * */
    const config = {
        method: 'GET',
        headers: {
            'Authorization': userToken
        },
    }

    const getHikeUrl = `${url}/Hike/${hikeId}`
    fetch(getHikeUrl, config)
        .then(res => (res.json()))
        .then((json) => {
            // в этом теле функции тебе надо сохранить данные
        })
};


const getAllHike = (limit, skip) => async (dispatch, getState) => {
    const userToken = getState().auth.accessToken;
    /*
    * что бы получить данные по какому-то hike тебе нужно
    * понять что это за id
    * */
    const config = {
        method: 'GET',
        headers: {
            'Authorization': userToken
        },
    }

    const getHikeUrl = `${url}/Hike/${limit}/${skip}`
    fetch(getHikeUrl, config)
        .then(res => (res.json()))
        .then((json) => {
            // в этом теле функции тебе надо сохранить данные
        })
};

export const createHike = () => async (dispatch, getState) => {
    const createHikeUlr = `${url}/Hike`;
    const userToken = getState().auth.accessToken;

    const body = {
        "creator": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "teamLeader": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "group": [
            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ],
        "userRequests": [
            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ],
        "userInvites": [
            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ],
        "hikeType": getState().finalForm.createHike.values.state,
        "startDate": getState().finalForm.createHike.values.endStartDates[0],
        "endDate": getState().finalForm.createHike.values.endStartDates[1],
        "completed": true,
        "route": [
            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ],
        "rate": 0,
        "desiredNumber": 0,
        "open": true,
        "country": "string",
        "state": "string",
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "creationDate": "2021-12-17T15:23:30.847Z"

    };

    const config = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Authorization': userToken
        },
    }

    fetch(createHikeUlr, config)
        .then(res => {
            if (res.status === 200) {
                alert('Hike успешно добавлен!');
                return res.json()
            }
        })
        .catch(error => console.error(error))
};