declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      localePrefix: string;
    }
  }
}

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {Provider} from 'react-redux';
import Colors from './src/configs/Colors';
import de from './src/configs/locales/de';
import en from './src/configs/locales/en';
import es from './src/configs/locales/es';
import fr from './src/configs/locales/fr';
import Login from './src/containers/Login';
import MyBoxes from './src/containers/MyBoxes';
import AppNavContainer from './src/navigation';
import AppStore from './src/redux';
const store = AppStore();

const App = () => {

  useEffect(() => {
    console.log('En length : ', Object.keys(en).length)
    console.log('ES length : ', Object.keys(es).length)
    console.log('DE length : ', Object.keys(de).length)
    console.log('FR length : ', Object.keys(fr).length)
  }, [])

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" translucent backgroundColor={'transparent'} />
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView 
          style={{
            flex: 1,
          }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <AppNavContainer />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Provider>
  );
  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
