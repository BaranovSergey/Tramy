import { createSlice } from '@reduxjs/toolkit';

const hikingItemsSlice = createSlice({
    name: 'hikingItems',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

export const { addItem, removeItem } = hikingItemsSlice.actions;
export default hikingItemsSlice.reducer;
