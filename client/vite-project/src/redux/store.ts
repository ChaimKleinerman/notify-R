import { configureStore } from '@reduxjs/toolkit';
import modeReducer from '../features/global/themes/modeSlice';
import userReducer from '../features/users/userSlice';
export  const store = configureStore({
  reducer: {
    mode: modeReducer,
    user: userReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
