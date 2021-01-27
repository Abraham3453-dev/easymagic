import React from 'react';
import {Text, View} from 'react-native';
import CContainer from '../components/CContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';

export interface AccountProps {}
interface AccountState {}

class Account extends React.Component<AccountProps, AccountState> {
  constructor(props: AccountProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CContainer>
        <Header showProfilePic />
        <View style={{flex: 1}}>
          <Text>Mon compte</Text>
        </View>
      </CContainer>
    );
  }
}

export default Account;
