import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../Store/Slices/auth';
import mainReducer from '../Store/Slices/mainSlice';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
