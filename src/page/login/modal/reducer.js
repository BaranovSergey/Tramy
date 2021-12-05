import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  accessToken: "",
  email: "",
  error: null,
  firstName: "",
  id: "",
  isAdmin: false,
  lastName: "",
  refreshToken: null,
}
const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuthenticatedUser: (state, action) => ({...state, ...action.payload.data})
  },
})

// Action creators are generated for each case reducer function
export const {  setAuthenticatedUser } = authSlice.actions

export default authSlice.reducer
