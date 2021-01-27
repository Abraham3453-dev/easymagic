import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Modal, ScrollView, Text} from 'react-native';
import { connect } from 'react-redux';
import {Flags} from '../assets/flags';
import SharedStyle from '../assets/styles/SharedStyle';
import CContainer from '../components/CContainer';
import Header from '../components/Header';
import LCItemCard from '../components/LCItemCard';
import I18n from '../configs/I18n';
import { setIsDataLoaded } from '../redux/actions/sessionActions';
import { getLocalePrefix } from '../services/LocaleHelper';



export interface LanguageChoiceProps {
  isDataLoaded?: boolean;
  setIsDataLoaded?: (payload: boolean) => void;
  onRefLC?: (lc: LanguageChoice) => void;
  onClose?: () => void;
}

interface LanguageChoiceState {
  showLC: boolean;
  selectedLanguage: string;
}

class LanguageChoice extends React.Component<
  LanguageChoiceProps,
  LanguageChoiceState
> {
  langList = [
    {
      id: 0,
      name: 'Français',
      flags: [Flags.canada, Flags.french],
      code: 'fr-FR',
    },
    {
      id: 2,
      name: 'English',
      flags: [Flags.america, Flags.english],
      code: 'en-EN',
    },
    {
      id: 3,
      name: 'Deutsch',
      flags: [Flags.deutsch],
      code: 'de-DE',
    },
    {
      id: 4,
      name: 'Español',
      flags: [Flags.spain],
      code: 'es-ES',
    },
  ];

  languageTimer: any

  constructor(props: LanguageChoiceProps) {
    super(props);
    this.state = {
      showLC: false,
      selectedLanguage: I18n.locale,
    };
  }

  componentDidMount() {
    if (this.props.onRefLC) {
      this.props.onRefLC(this);
    }
  }

  open = () => {
    this.setState({showLC: true});
  };

  close = () => {
    this.setState({showLC: false});
    if (this.props.onClose) {
      this.props.onClose()
    }
  };

  setLanguage = async (langCode: string) => {
    this.setState({selectedLanguage: langCode});
    I18n.locale = langCode;
    AsyncStorage.setItem('locale', langCode)
    if (langCode.toLowerCase().includes('fr')) {
      global.localePrefix = 'fr';
    } else if (langCode.toLowerCase().includes('de')) {
      global.localePrefix = 'de';
    } else if (langCode.toLowerCase().includes('es')) {
      global.localePrefix = 'es';
    } else {
      global.localePrefix = 'en';
    }
    const isIntroShown = await AsyncStorage.getItem('is_intro_shown')
    if (isIntroShown && this.props.isDataLoaded === false) {
      if (this.props.setIsDataLoaded) {
        this.props.setIsDataLoaded(true)
      }
    } else {
      this.close();
    }
  };

  render() {
    return (
      <Modal
        visible={this.state.showLC}
        onRequestClose={this.close}
        transparent
        statusBarTranslucent
        animationType={'fade'}
      >
        <CContainer>
          <Header />
          <ScrollView contentContainerStyle={{ padding: 20 }}>
            {
              this.langList.map((languageData, indexLanguage) => {
                return (
                  <LCItemCard
                    key={languageData.code + '-' + indexLanguage}
                    {...{languageData}}
                    selectedLanguage={this.state.selectedLanguage}
                    setLanguage={() => {
                      this.setLanguage(languageData.code)
                    }}
                  />
                  )
              })
            }
          </ScrollView>
        </CContainer>
      </Modal>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isDataLoaded: state.session.isDataLoaded,
});

const mapDispatchToProps = (dispatch: any) => ({
  setIsDataLoaded: (payload: boolean) => dispatch(setIsDataLoaded(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageChoice);
