import { createSlice } from '@reduxjs/toolkit';

const initialState: IModalSliceState = {
  modal: '',
  errorMessage: '',
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
    setErrorMessage: (state, action) => {
      return {
        ...state,
        errorMessage: action.payload,
      };
    },
  },
});

export const { setModal, setErrorMessage } = modalSlice.actions;

export default modalSlice.reducer;
