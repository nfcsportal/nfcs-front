import { createSlice } from '@reduxjs/toolkit';

const initialState: IDashboardSliceState = {
  loading: false,
};

export const mainSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { setDashboardLoading } = mainSlice.actions;

export default mainSlice.reducer;
