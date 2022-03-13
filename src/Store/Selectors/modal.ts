import { createSelector } from 'reselect';

const modalSelector = (state: TState) => state.modal;
export const getModal = createSelector(modalSelector, (state) => state.modal);
