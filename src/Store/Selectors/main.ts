import { createSelector } from 'reselect';

const mainSelector = (state: TState) => state.main;
export const getCurrentLocale = createSelector(mainSelector, (state) => state.locale);
