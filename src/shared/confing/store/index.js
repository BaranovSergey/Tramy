import {configureStore} from '@reduxjs/toolkit'
import hikeSlice from "../../api/reducers/hike/modal";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import authSlice from "../../../page/login/modal/reducer";
import finalFormRedecer from '../../api/reducers/final-form/index';
import foundUsersReducer from '../../api/reducers/search-users/modal/index'

const middleware = [logger, thunk];

const reducer = {
    auth: authSlice,
    finalForm: finalFormRedecer,
    hike: hikeSlice,
    foundUsers: foundUsersReducer,
};

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    devTools: process.env.NODE_ENV !== 'production',
})
