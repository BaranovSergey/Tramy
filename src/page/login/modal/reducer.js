import { createSlice } from '@reduxjs/toolkit'


const initialState = { // переменные
  accessToken: "",
  email: "",
  error: null,
  firstName: "",
  id: "",
  isAdmin: false,
  lastName: "",
  refreshToken: null,
};

const authSlice = createSlice({ // функции которые устанавливают переменные
  name: 'counter',
  initialState,
  reducers: { // все что в свойстве reducers - это функции которые устанавливают состояния
    setAuthenticatedUser: (state, action) => ({...state, ...action.payload.data}) // ...action.payload.data - это деструктуризация
  },
})

// Action creators are generated for each case reducer function
export const {  setAuthenticatedUser } = authSlice.actions


export default authSlice.reducer
