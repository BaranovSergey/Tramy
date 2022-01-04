import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  value: 0,
  allHikes:[],
}
export const hikeSlice = createSlice({
  name: 'hike',
  initialState,
  reducers: {
    setAllHike:(state, action) => ({...state,allHikes: [...action.payload.data] })
  },
})

// Action creators are generated for each case reducer function
export const {setAllHike} = hikeSlice.actions

export default hikeSlice.reducer
