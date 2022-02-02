import { createSlice } from '@reduxjs/toolkit';

const initialState: IMainSliceState = {
  locale: 'en',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      return {
        ...state,
        locale: action.payload,
      };
    },
  },
});

export const { setLocale } = mainSlice.actions;

export default mainSlice.reducer;
