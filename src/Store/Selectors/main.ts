import { createSelector } from 'reselect';

const mainSelector = (state: IMainSliceState) => state;
export const getCurrentLocale = createSelector(mainSelector, (state) => state.locale);
