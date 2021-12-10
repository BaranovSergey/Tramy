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


