import { ACTION_TYPES } from './ActionTypes/main';
import { ACTIONTYPE, TMainReducer } from './reducers.types';

export const MainState: TMainReducer = {
  locale: 'en',
};

export const mainReducer = (state: TMainReducer, action: ACTIONTYPE): TMainReducer => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};
