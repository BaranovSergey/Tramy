import {configureStore} from '@reduxjs/toolkit'
import counterSlice from "../../api/reducers/hike/modal";
import logger from 'redux-logger'
import thunk from "redux-thunk";

const middleware = [logger, thunk];

const reducer = {
  counter: counterSlice,
}

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
})
