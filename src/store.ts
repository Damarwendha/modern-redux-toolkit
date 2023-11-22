import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // ...another slice reduce
  },
});

// Typescript requirement
export type RootState = ReturnType<typeof store.getState>;

export default store;
