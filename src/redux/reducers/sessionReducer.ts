import {
  SET_IS_DATA_LOADED,
  SET_IS_INTRO_SHOWN,
  SET_IS_SIGNED_IN,
  SET_SESSION,
} from '../types/sessionTypes';

const initialState = {
  isSignedIn: false,
  isDataLoaded: false,
  isIntroShown: false,
  user: null,
};

const sessionReducer = (state: any = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case SET_IS_SIGNED_IN:
      return {
        ...state,
        isSignedIn: action.payload,
      };
    case SET_SESSION:
      return {
        ...state,
        user: action.payload,
      };
    case SET_IS_DATA_LOADED:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    case SET_IS_INTRO_SHOWN:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
