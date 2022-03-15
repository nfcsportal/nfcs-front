import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../Store/Slices/auth';
import dashboardReducer from '../Store/Slices/dashboard';
import mainReducer from '../Store/Slices/mainSlice';
import modalReducer from '../Store/Slices/modal';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    auth: authReducer,
    modal: modalReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
