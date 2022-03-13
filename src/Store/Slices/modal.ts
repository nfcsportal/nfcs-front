import { createSlice } from '@reduxjs/toolkit';

const initialState: IModalSliceState = {
  modal: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action) => {
      return {
        ...state,
        modal: action.payload,
      };
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
