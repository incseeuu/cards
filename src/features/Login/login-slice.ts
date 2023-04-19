import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
}

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {},
})
