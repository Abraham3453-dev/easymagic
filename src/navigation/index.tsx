import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Footer from '../components/Footer';
import AppNavigation from './AppNavigation';
import { navigationRef } from './RootNavigation';
const AppNavContainer = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <AppNavigation />
        </NavigationContainer>
    )
}

export default AppNavContainer;