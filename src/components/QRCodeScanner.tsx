import React from 'react';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CContainer from './CContainer';
import EMSButton from './EMSButton';
import Header from './Header';
export interface QRCodeScannerProps {
    onQRRef?: (ref: QRCodeScanner) => void
    onClose?: () => void
}
interface QRCodeScannerState {
    showMe: boolean
}
class QRCodeScanner extends React.Component<QRCodeScannerProps, QRCodeScannerState> {
//   const camera = React.createRef<RNCamera>();
//   const [showMe, setShowMe] = React.useState(false);
    camera: RNCamera | null = null
  constructor (props: QRCodeScannerProps){
      super(props)
      this.state = {
          showMe: false,
      }
  }

  componentDidMount(){
      if (this.props.onQRRef) {
          this.props.onQRRef(this);
      }
  }

  open = () => {
      this.setState({showMe: true});
  }

  close = () => {
    this.setState({showMe: false});
    if (this.props.onClose) {
        this.props.onClose()
    }
  }

  render(){
    return (
        <Modal
            visible={this.state.showMe}
            onRequestClose={() => {
                this.close()
            }}
            transparent={true}
            statusBarTranslucent
        >
            <View style={{flex: 1}}>
              <RNCamera
                ref={(ref) => {ref = this.camera}}
                style={Style.preview}
                // ratio={'3:4'}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
                //   androidRecordAudioPermissionOptions={{
                //     title: 'Permission to use audio recording',
                //     message: 'We need your permission to use your audio',
                //     buttonPositive: 'Ok',
                //     buttonNegative: 'Cancel',
                //   }}
                onGoogleVisionBarcodesDetected={({barcodes, type}) => {
                  // console.log(type);
                //   if (barcodes[0].type !== 'UNKNOWN_FORMAT') {
                //     // console.log('Type de data : ', type);
                //     console.log(barcodes[0]);
                //     camera?.current?.pausePreview();
                //   }
                }}
                onTextRecognized={(responseText) => {
                    console.log(responseText.textBlocks[0])
                }}
              />
            </View>
        </Modal>
    )
  }
    
  
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // width: Dimensions.get('window').width - 100,
    // height: Dimensions.get('window').width - 100,
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

export default QRCodeScanner;
