import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer, Storage } from 'redux-persist'

import { userSliceReducer } from './slices/user/userSlice'
import { getStorage } from 'utils/Storage'
import theme from './slices/theme'

const rootReducer = combineReducers({
  user: userSliceReducer,
  theme: theme,
})
const storage = getStorage('redux')
export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value)
    return Promise.resolve(true)
  },
  getItem: (key) => {
    const value = storage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key) => {
    storage.delete(key)
    return Promise.resolve()
  },
}

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
