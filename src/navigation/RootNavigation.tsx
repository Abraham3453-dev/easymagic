import React from 'react';

export const navigationRef: any = React.createRef();

export const navigate = (routeName: string, params?: any) => {
    navigationRef.current?.navigate(routeName, params)
}

export const goBack = () => {
    navigationRef.current?.goBack()
}

export const push = (routeName: string, params?: any) => {
    navigationRef.current?.push(routeName, params)
}

export const getRootState = () => {
    return navigationRef.current?.getRootState();
}

export const dangerouslyGetState = () => {
    return navigationRef.current?.dangerouslyGetState();
}

export const addListener = (listner: string, payload: (data: any) => void) => {
    return navigationRef.current?.addListener(
        listner,
        payload
    )
}

export const state = navigationRef.current?.state