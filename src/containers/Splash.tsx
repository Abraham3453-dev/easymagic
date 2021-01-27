import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Assets from '../assets';
import Colors from '../configs/Colors';
import Version from '../configs/Version';
import { setIsDataLoaded } from '../redux/actions/sessionActions';
import IntroShow from './IntroShow';
import LanguageChoice from './LanguageChoice';

export interface SplashProps {
  setIsDataLoaded?: (payload: boolean) => void
}
interface SplashState {
  isSplash: boolean;
}

class Splash extends React.Component<SplashProps, SplashState> {

  private lcRef: any = null
  private isRef: any = null

  constructor(props: SplashProps) {
    super(props);
    this.state = {
      isSplash: true,
    };
  }

  componentDidMount(){
    this.loadData()
  }

  loadData = async () => {
    const locale = await AsyncStorage.getItem('locale')
    const isIntroShown = await AsyncStorage.getItem('is_intro_shown')
    console.log('Locale : ', locale)
    console.log('isItroShown : ', isIntroShown)
    setTimeout(() => {
      this.setState({ isSplash: false })
      if (this.lcRef) {
        this.lcRef.open()
      }
    }, 2000)
  }

  render() {
    return (
      <ImageBackground
        source={(this.state.isSplash ? Assets.Images.splashBG : Assets.Images.imageBG)}
        style={[Style.imageBackground]}
        imageStyle={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          resizeMode: 'cover',
        }}
        resizeMethod={'resize'}
      >
        <View style={[Style.container]}>
          {/*  */}
          {
            this.state.isSplash && 
            <Text style={[Style.versionName]}>
              {Version.name}
            </Text>
          }
          <LanguageChoice
            onRefLC={(lc) => {
              this.lcRef = lc
            }}
            onClose={() => {
              if (this.lcRef) {
                this.isRef.open()
              }
            }}
          />
          <IntroShow
            onRefIS={(is) => {
              this.isRef = is
            }}
            onClose={() => {
              if (this.lcRef) {
                this.lcRef.open()
              }
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}

const Style = StyleSheet.create({
  imageBackground: {
    flex: 1,
    // backgroundColor: Colors.black
  },
  container: {
    flex: 1,
    backgroundColor: '#00000000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  versionName: {
    fontWeight: 'bold',
    color: Colors.orange
  },
});

const mapStateToProps = (state: any) => ({
  isDataLoaded: state.session.isDataLoaded,
});

const mapDispatchToProps = (dispatch: any) => ({
  setIsDataLoaded: (payload: boolean) => dispatch(setIsDataLoaded(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
