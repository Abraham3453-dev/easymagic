import { SET_IS_DATA_LOADED, SET_IS_INTRO_SHOWN, SET_IS_SIGNED_IN, SET_SESSION } from "../types/sessionTypes";

export const setIsSignedIn = (payload: boolean) => {
    return {
        type: SET_IS_SIGNED_IN,
        payload
    };
}

export const setSession = (payload: any) => {
    return {
        type: SET_SESSION,
        payload
    };
}

export const setIsDataLoaded = (payload: boolean) => {
    return {
        type: SET_IS_DATA_LOADED,
        payload
    }
}

export const setIsIntroShown = (payload: boolean) => {
    return {
        type: SET_IS_INTRO_SHOWN,
        payload
    }
}