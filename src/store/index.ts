import { configureStore } from '@reduxjs/toolkit'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import reducers from './reducers'
import Reactotron from 'utils/ReactotronConfig'

export const store = configureStore({
  reducer: reducers,
  enhancers: __DEV__ ? [Reactotron.createEnhancer!()] : [],
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })

    return middlewares
  },
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
