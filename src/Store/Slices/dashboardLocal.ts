import { createSlice } from '@reduxjs/toolkit';

import { DASHBOARD_SLIDES } from '../../Constants/dashboard';

const initialState: IDashboardLocalSlice = {
  currentSlide: DASHBOARD_SLIDES.forecastList,
};

export const dashboardLocalSlice = createSlice({
  name: 'dashboardLocl',
  initialState,
  reducers: {
    setCurrentSlide: (state, action) => {
      return {
        ...state,
        currentSlide: action.payload,
      };
    },
  },
});

export const { setCurrentSlide } = dashboardLocalSlice.actions;

export default dashboardLocalSlice.reducer;
