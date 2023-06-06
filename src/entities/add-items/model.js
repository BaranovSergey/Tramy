import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    items: [],
}
export const findUsers = createSlice({
    name: 'findUsers',
    initialState,
    reducers: {
        setFoundUsers:(state, action) => ({...state, users:[...action.payload.data] })
    },
})

// Action creators are generated for each case reducer function
export const {setFoundUsers} = findUsers.actions

export default findUsers.reducer
