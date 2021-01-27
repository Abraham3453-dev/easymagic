import React from 'react';
import {Dimensions, ImageBackground, Platform, StatusBar, StyleSheet, View} from 'react-native';
import Assets from '../assets';
import SharedStyle from '../assets/styles/SharedStyle';
import Colors from '../configs/Colors';

export interface CContainerProps {}
interface CContainerState {}

class CContainer extends React.Component<CContainerProps, CContainerState> {

  constructor(props: CContainerProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={Assets.Images.imageBG}
        style={[Style.imageBackground]}
        imageStyle={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          resizeMode: 'cover',
        }}
        resizeMethod={'resize'}
      >
        <View style={[
            Style.container
        ]}>
          {this.props.children}
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
  },
})

export default CContainer;