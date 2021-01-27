import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SharedStyle from '../assets/styles/SharedStyle';
import CContainer from '../components/CContainer';
import EMSButton from '../components/EMSButton';
import EMSTextInput from '../components/EMSTextInput';
import Header from '../components/Header';
import Colors from '../configs/Colors';
import I18n from '../configs/I18n';

export interface CreateAccountProps {}
interface CreateAccountState {}

class CreateAccount extends React.Component<
  CreateAccountProps,
  CreateAccountState
> {
  constructor(props: CreateAccountProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CContainer>
        <Header showBackButton />
        <ScrollView>
            <View style={[SharedStyle.borderBGBlack, Style.caContainer]}>
              <Text style={[SharedStyle.textWhite, Style.loginText]}>
                {I18n.t('seConnecter')}
              </Text>
              <Text style={[SharedStyle.textOrange]}>
                {'Server message (error, etc)'}
              </Text>
              <EMSTextInput
                placeholder={I18n.t('nom')}
                errorMessage={undefined}
              />
              <EMSTextInput
                placeholder={I18n.t('prenom')}
                errorMessage={undefined}
              />
              <EMSTextInput
                placeholder={I18n.t('dob') + ' (jj/mm/AAAA, YYYY-mm-dd)'}
                errorMessage={undefined}
              />
              <EMSTextInput
                placeholder={I18n.t('email')}
                errorMessage={undefined}
              />
              <EMSTextInput
                placeholder={I18n.t('confirmEmail')}
                errorMessage={undefined}
              />
              <EMSTextInput
                placeholder={I18n.t('motDePasse')}
                errorMessage={undefined}
              />
              <EMSButton
                label={I18n.t('seConnecter')}
                custumStyle={{ width: '100%', backgroundColor: Colors.yellow, marginTop: 20 }}
                labelStyle={{ color: Colors.white }}
              />
            </View>
          </ScrollView>
      </CContainer>
    );
  }
}

const Style = StyleSheet.create({
    caContainer: {
      margin: 20,
    },
    loginText: {
      fontSize: 24,
    }
  })

export default CreateAccount;
