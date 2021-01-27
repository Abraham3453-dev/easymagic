import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import assets from '../assets';
import Colors from '../configs/Colors';
export interface BoxCardProps {
  title: string;
  name: string;
  imageURI: string;
  onPress?: () => {};
}
const BoxCard = ({title, name, imageURI, onPress}: BoxCardProps) => {
  return (
    <>
      <TouchableOpacity style={Style.cardContainer}>
        <View style={Style.leftC}>
          <Image
            source={{uri: imageURI}}
            resizeMode={'contain'}
            resizeMethod={'resize'}
            style={Style.boxImage}
          />
        </View>
        <View style={Style.centerC}>
          <Text style={Style.boxTitle} numberOfLines={1}>{title}</Text>
          <Text style={Style.boxName} numberOfLines={1}>{name}</Text>
        </View>
        <View style={Style.rightC}>
          <Image
            source={assets.Icons.select}
            resizeMode={'contain'}
            resizeMethod={'resize'}
            style={Style.selectIcon}
          />
        </View>
      </TouchableOpacity>
      <View style={Style.separator} />
    </>
  );
};

const Style = StyleSheet.create({
  cardContainer: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftC: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  boxImage: {
    width: 40,
    height: 40,
  },
  centerC: {
    flex: 1,
  },
  boxTitle: {
    fontSize: 20,
    color: Colors.white,
  },
  boxName: {
    fontSize: 10,
    color: Colors.white,
  },
  rightC: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  selectIcon: {
    width: 12,
    height: 12,
    tintColor: Colors.white,
  },
  separator: {
    height: 10,
    backgroundColor: '#00000000',
  },
});

export default BoxCard;
