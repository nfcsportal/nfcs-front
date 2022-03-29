import { createSelector } from 'reselect';

const dashboardLocalSelector = (state: TState) => state.dashboardLocal;
export const getDashboardCurrentSlide = createSelector(
  dashboardLocalSelector,
  (state) => state.currentSlide
);
