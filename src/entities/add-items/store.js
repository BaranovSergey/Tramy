import { configureStore } from '@reduxjs/toolkit';
import hikingItemsReducer from './hikingItemsSlice';

const store = configureStore({
    reducer: {
        items: hikingItemsReducer,
    },
});

export default store;
