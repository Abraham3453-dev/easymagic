import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import * as RootNav from '../navigation/RootNavigation';
import {RNCamera} from 'react-native-camera';
import CContainer from '../components/CContainer';
import EMSButton from '../components/EMSButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QRCodeScanner from '../components/QRCodeScanner';
import { useIsFocused } from "@react-navigation/native"; 

export interface AddBoxProps {
  navigation?: any
}
interface AddBoxState {}

class AddBox extends React.Component<AddBoxProps, AddBoxState> {

  qcodeScanner: QRCodeScanner | null = null;
  navListner: any = null

  constructor(props: AddBoxProps) {
    super(props);
    this.state = {};
  }

  async componentDidMount(){
    //   const ratios = await this.camera?.getSupportedRatiosAsync();
    //   console.log(ratios);
    this.qcodeScanner?.open();
    // const isFocused = useIsFocused();
    // const rootState = RootNav.getRootState();
    // console.log('RootState : ', rootState);
    // if (isFocused) {
    //   this.qcodeScanner?.open()
    // }
    this.navListner = this.props.navigation.addListener('focus', () => {
      this.qcodeScanner?.open();
    })
  }

  componentDidUpdate(){
    this.qcodeScanner?.open();
  }

  render() {
    return (
      <>
        {/* <Header /> */}
        <QRCodeScanner
          onQRRef={(ref) => {this.qcodeScanner = ref}}
          onClose={() => {
            RootNav.navigate('MyBoxes');
          }}
        />
      </>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').width - 100,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default AddBox;
