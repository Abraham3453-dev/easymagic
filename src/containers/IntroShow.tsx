import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Image, Modal, ScrollView, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Assets from '../assets';
import CContainer from '../components/CContainer';
import Header from '../components/Header';
import Colors from '../configs/Colors';
import I18n from '../configs/I18n';
import { setIsDataLoaded } from '../redux/actions/sessionActions';

export interface IntroShowProps {
  onClose?: () => void;
  onRefIS?: (is: IntroShow) => void;
  setIsDataLoaded?: (payload: boolean) => void;
  isDataLoaded?: boolean;
}
interface IntroShowState {
  showIntro: boolean;
}

class IntroShow extends React.Component<IntroShowProps, IntroShowState> {
  constructor(props: IntroShowProps) {
    super(props);
    this.state = {
      showIntro: false,
    };
  }

  componentDidMount() {
    if (this.props.onRefIS) {
      this.props.onRefIS(this);
    }
  }

  open = () => {
    this.setState({showIntro: true});
  };

  close = () => {
    this.setState({showIntro: false});
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  setReadNotice = async () => {
    const doneReadNotic = await AsyncStorage.setItem('is_intro_shown', 'read')
    if (this.props.setIsDataLoaded) {
      this.props.setIsDataLoaded(true)
    }
  }

  render() {
    return (
      <Modal
        visible={this.state.showIntro}
        onRequestClose={this.close}
        transparent
        statusBarTranslucent
        animationType={'fade'}>
        <CContainer>
          <Header
            showBackButton
            onPressBackButton={() => {
              this.close();
            }}
          />
          <ScrollView contentContainerStyle={{padding: 20}}>
            <Text
              style={{
                color: Colors.white,
                marginBottom: 20,
                fontSize: 16,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.yellow,
                }}>
                {I18n.t('textIntro1Indice')}
              </Text>
              {I18n.t('textIntro1')}
            </Text>
            <Text
              style={{
                color: Colors.white,
                marginBottom: 20,
                fontSize: 16,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.yellow,
                }}>
                {I18n.t('textIntro2Indice')}
              </Text>
              {I18n.t('textIntro2')}
            </Text>
            <Text
              style={{
                color: Colors.white,
                marginBottom: 20,
                fontSize: 16,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.yellow,
                }}>
                {I18n.t('textIntro3Indice')}
              </Text>
              {I18n.t('textIntro31')}
              <Image
                source={Assets.Icons.downloadIcon}
                style={{
                  width: 18,
                  height: 18,
                  resizeMode: 'contain',
                  tintColor: Colors.yellow,
                }}
              />
              {I18n.t('textIntro32')}
            </Text>
            <Text
              style={{
                color: Colors.white,
                marginBottom: 20,
                fontSize: 16,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.yellow,
                }}>
                {I18n.t('textIntro4Indice')}
              </Text>
              {I18n.t('textIntro4')}
            </Text>
            <Text
              style={{
                color: Colors.white,
                marginBottom: 20,
                fontSize: 16,
              }}>
              {I18n.t('textIntro5')}
            </Text>
          </ScrollView>
          <TouchableOpacity
            style={{
              // width: '100%',
              margin: 20,
              alignItems: 'center',
              padding: 10,
              backgroundColor: Colors.yellow,
              borderRadius: 1000,
            }}
            onPress={() => {
              this.setReadNotice()
              // this.props.setReadNotice()
              // this.getStarted()
              // if (this.props.onPressNext) {
              //     this.props.onPressNext()
              // }
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 16,
                textTransform: 'uppercase',
              }}>
              {I18n.t('next')}
            </Text>
          </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(IntroShow);

// export default IntroShow;
