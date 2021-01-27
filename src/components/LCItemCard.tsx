import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../configs/Colors';

export interface LCItemCardProps {
  languageData: any;
  selectedLanguage: any;
  setLanguage?: (languageCode: string) => void;
}

const LCItemCard = ({
  languageData,
  selectedLanguage,
  setLanguage,
}: LCItemCardProps) => {
  return (
    <TouchableOpacity
      key={'LANG-' + languageData.code}
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        backgroundColor:
          selectedLanguage === languageData.code
            ? Colors.orange
            : Colors.orange + '22',
        width: '100%',
        margin: 0,
        marginBottom: 2,
      }}
      onPress={() => {
        if (setLanguage) {
          setLanguage(languageData.code);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {languageData.flags.map((flag: any, indexFlag: number) => {
          return (
            <Image
              key={'FLAG-' + indexFlag + languageData.code}
              source={flag}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                backgroundColor: 'transparent',
                marginLeft: 5,
              }}
            />
          );
        })}
        <Text
          style={[
            {
              marginRight: 12,
              fontSize: 12,
              color: Colors.white,
              marginLeft: 5,
            },
          ]}>
          {languageData.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LCItemCard;
