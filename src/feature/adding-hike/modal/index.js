import {url} from "../../../shared/confing/url";



export const fetchAddHike = (newHike) => (dispatch, getState) =>{
  const testDataFoRequest = {
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
    "hikeType": "Forest",
    "startDate": "2021-12-05T15:40:16.727Z",
    "endDate": "2021-12-05T15:40:16.727Z",
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
    "creationDate": "2021-12-05T15:40:16.727Z"
  };
  const userToken = getState().auth.accessToken;
  const addHikeUrl = `${url}/Hike`;
  const config = {
    method: 'POST',
    body: JSON.stringify(testDataFoRequest),
    headers: {
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    },
  }
  fetch(addHikeUrl, config)
    .then((res) => res.json())
    .then((data) => {
      dispatch();
    })
    .catch(err => console.error(err))
    .finally(() => {

    })
}
