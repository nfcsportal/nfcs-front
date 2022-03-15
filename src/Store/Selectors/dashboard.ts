import { createSelector } from 'reselect';

const dashboardSelector = (state: TState) => state.dashboard;
export const getDashboardLoading = createSelector(dashboardSelector, (state) => state.loading);
