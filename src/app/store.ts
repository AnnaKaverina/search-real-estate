import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import realEstateObjectsReducer from '../features/realEstateObjects/realEstateObjectsSlice'
import { realEstateObjectsApi } from '../services/realEstateObject'

export const store = configureStore({
  reducer: {
    setRealEstateObjects: realEstateObjectsReducer,
    [realEstateObjectsApi.reducerPath]: realEstateObjectsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(realEstateObjectsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
