import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  value: 0,
}
export const hikeSlice = createSlice({
  name: 'hike',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = hikeSlice.actions

export default hikeSlice.reducer
