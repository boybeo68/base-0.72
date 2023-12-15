import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface UserState {
  isAuth: boolean
  loading: boolean
  error: string
}

const initialState: UserState = {
  isAuth: false,
  loading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    },
  },
})

export const { userAuth } = userSlice.actions

export const userSliceReducer = userSlice.reducer
