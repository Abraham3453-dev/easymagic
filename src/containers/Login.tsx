import React from 'react';
import {Keyboard, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import SharedStyle from '../assets/styles/SharedStyle';
import CContainer from '../components/CContainer';
import EMSButton from '../components/EMSButton';
import EMSTextInput from '../components/EMSTextInput';
import Header from '../components/Header';
import Colors from '../configs/Colors';
import I18n from '../configs/I18n';
import LanguageChoice from './LanguageChoice';
import * as RootNav from '../navigation/RootNavigation';
import { setIsSignedIn, setSession } from '../redux/actions/sessionActions';
import { connect } from 'react-redux';

export interface LoginProps {
  setSession?: (payload: boolean) => void;
  setIsSignedIn: (payload: boolean) => void;
}
interface LoginState {
  reload: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {

  private lcRef: any = null;

  constructor(props: LoginProps) {
    super(props);
    this.state = {
      reload: false,
    };
  }

  render() {
    return (
      <CContainer>
        <Header />
        <TouchableWithoutFeedback style={{flex: 1}} onPress={() => { Keyboard.dismiss() }} accessible={false}>
          <ScrollView>
            <View style={[SharedStyle.borderBGBlack, Style.loginContainer]}>
              <Text style={[SharedStyle.textWhite, Style.loginText]}>
                {I18n.t('seConnecter')}
              </Text>
              <Text style={[SharedStyle.textOrange]}>
                {'Server message (error, etc)'}
              </Text>
              <EMSTextInput
                placeholder={I18n.t('adresseEmail')}
                errorMessage={undefined}
                keyboardType={'email-address'}
              />
              <EMSTextInput
                placeholder={I18n.t('motDePasse')}
                errorMessage={undefined}
                // keyboardType={'email-address'}
                secureTextEntry={true}
              />
              <View style={{width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                <EMSButton
                  label={I18n.t('language')} size={'small'}
                  onPress={() => {
                    this.lcRef.open()
                  }}
                />
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                  }}
                  onPress={() => {
                    RootNav.navigate('LostPassword')
                  }}
                >
                  <Text style={{ color: Colors.orange }}>
                    {I18n.t('motDePasseOublie')}
                  </Text>
                </TouchableOpacity>
              </View>
              <EMSButton
                label={I18n.t('seConnecter')}
                custumStyle={{ width: '100%', backgroundColor: Colors.yellow, marginTop: 20 }}
                labelStyle={{ color: Colors.white }}
                onPress={() => {
                  if (this.props.setIsSignedIn) {
                    this.props.setIsSignedIn(true);
                  }
                }}
              />
              <View style={{width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity
              style={{
                paddingVertical: 10
              }}
              onPress={() => {
                Linking.openURL('mailto:' + I18n.t('contactEmail'))
              }}
              >
                  <Text style={{ color: Colors.white }}>
                    {I18n.t('contactEmail')}
                  </Text>
                </TouchableOpacity>
                <EMSButton
                  label={I18n.t('sEnregistrer')}
                  labelStyle={{ fontWeight: '500'}}
                  onPress={() => {
                    RootNav.navigate('CreateAccount')
                  }}
                />
                
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
        <LanguageChoice
            onRefLC={(lc) => {
              this.lcRef = lc
            }}
            onClose={() => {
              this.setState({ reload: false })
            }}
          />
      </CContainer>
    );
  }
}

const Style = StyleSheet.create({
  loginContainer: {
    margin: 20,
  },
  loginText: {
    fontSize: 24,
  }
})

const mapStateToProps = (state: any) => ({
  isSignedIn: state.session.isSignedIn,
  isDataLoaded: state.session.isDataLoaded,
});

const mapDispatchToProps = (dispatch: any) => ({
  setIsSignedIn: (payload: boolean) => dispatch(setIsSignedIn(payload)),
  setSession: (payload: boolean) => dispatch(setSession(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
