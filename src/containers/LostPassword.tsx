import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SharedStyle from '../assets/styles/SharedStyle';
import CContainer from '../components/CContainer';
import EMSButton from '../components/EMSButton';
import EMSTextInput from '../components/EMSTextInput';
import Header from '../components/Header';
import Colors from '../configs/Colors';
import I18n from '../configs/I18n';

export interface LostPasswordProps {}
interface LostPasswordState {}

class LostPassword extends React.Component<
  LostPasswordProps,
  LostPasswordState
> {
  constructor(props: LostPasswordProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CContainer>
        <Header showBackButton />
        <ScrollView>
            <View style={[SharedStyle.borderBGBlack, Style.lpContainer]}>
              <Text style={[SharedStyle.textWhite, Style.boldText]}>
                {I18n.t('seConnecter')}
              </Text>
              <Text style={[SharedStyle.textOrange]}>
                {'Server message (error, etc)'}
              </Text>
              <EMSTextInput
                placeholder={I18n.t('adresseEmail')}
                errorMessage={undefined}
              />
              <EMSButton
                label={I18n.t('envoyer')}
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
  lpContainer: {
    margin: 20,
  },
  boldText: {
    fontSize: 24,
  }
})


export default LostPassword;
