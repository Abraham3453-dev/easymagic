import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import Colors from '../configs/Colors';
export interface EMSButtonProps {
  label?: string;
  custumStyle?: ViewStyle;
  labelStyle?: TextStyle;
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void
}
const EMSButton = ({ label, custumStyle, labelStyle, size, onPress }: EMSButtonProps) => {
    return (
        <TouchableOpacity
          style={[(size === 'small' ? Style.buttonSmall : (size === 'large' ? Style.buttonLarge : Style.buttonMedium)), custumStyle]}
          onPress={() => {
            if (onPress) {
              onPress()
            }
          }}
        >
          <Text style={[Style.label, labelStyle]}>
            { label || 'Button ' }
          </Text>
        </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
  buttonSmall: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 7,
  },
  buttonMedium: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 7,
  },
  buttonLarge: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 7,
  },
  label: {
    color: Colors.black,
    fontWeight: 'bold',
  },
})

export default EMSButton;