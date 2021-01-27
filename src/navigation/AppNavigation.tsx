import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateAccount from '../containers/CreateAccount';
import Login from '../containers/Login';
import LostPassword from '../containers/LostPassword';
import Account from '../containers/Account';
import MyBoxes from '../containers/MyBoxes';
import ListBoxes from '../containers/ListBoxes';
import {connect} from 'react-redux';
import {setIsSignedIn, setSession} from '../redux/actions/sessionActions';
import Splash from '../containers/Splash';
import AddBox from '../containers/AddBox';
import Footer from '../components/Footer';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={'Login'}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'CreateAccount'} component={CreateAccount} />
      <Stack.Screen name={'LostPassword'} component={LostPassword} />
    </Stack.Navigator>
  );
};

const AppNav = () => {
  return (
    <Tabs.Navigator
      backBehavior={'none'}
      initialRouteName={'MyBoxes'}
      // screenOptions={{tabBarVisible: true}}
      tabBar={(props) => <Footer {...props} />}
    >
      <Tabs.Screen name={'Account'} component={Account} />
      <Tabs.Screen name={'MyBoxes'} component={MyBoxes} />
      <Tabs.Screen name={'ListBoxes'} component={ListBoxes} />
      <Tabs.Screen name={'AddBox'} component={AddBox} />
    </Tabs.Navigator>
  );
};

const AppSplash = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={'Splash'} component={Splash} />
    </Stack.Navigator>
  );
};

const AuthFlow = (props: any) => {
  if (props.isSignedIn) {
    return (
      <AppNav />
    );
  }
  if (props.isDataLoaded) {
    return <AuthNav />;
  }
  return <AppSplash />;
};

const mapStateToProps = (state: any) => ({
  isSignedIn: state.session.isSignedIn,
  isDataLoaded: state.session.isDataLoaded,
});

const mapDispatchToProps = (dispatch: any) => ({
  setIsSignedIn: (payload: boolean) => dispatch(setIsSignedIn(payload)),
  setSession: (payload: boolean) => dispatch(setSession(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthFlow);
