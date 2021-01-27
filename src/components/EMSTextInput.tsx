import React from 'react';
import { Image, StyleSheet, Text, TextInput, TextInputAndroidProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Colors from '../configs/Colors';
export interface EMSTextInputProps {
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;
  errorMessageStyle?: TextStyle;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | undefined;
  secureTextEntry?: boolean | undefined;
}
const EMSTextInput = ({ placeholder, label, errorMessage, onChangeText, containerStyle, labelStyle, valueStyle, errorMessageStyle, keyboardType, secureTextEntry }: EMSTextInputProps) => {
    return (
        <View style={[Style.emsTContainer, containerStyle]}>
          <Text style={[Style.labelStyle, labelStyle]}>
            {label}
          </Text>
          <View style={[
            Style.rowContainer,
            {
              borderBottomColor: (errorMessage ? Colors.orange : Colors.white),
            }
            ]}>
            {/* All about left element */}
            {/* <TouchableOpacity>
              <Image />
            </TouchableOpacity> */}
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={Colors.white + 'ff'}
              onChangeText={(text) => {
                if (onChangeText) {
                  onChangeText(text)
                }
              }}
              style={[Style.valueStyle, valueStyle]}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
            />
            {/* All about right element */}
            {/* <TouchableOpacity>
              <Image />
            </TouchableOpacity> */}
          </View>
          <Text style={[Style.errorStyle, errorMessageStyle]}>
            {errorMessage}
          </Text>
        </View>
    )
}

const Style = StyleSheet.create({
  emsTContainer: {
    width: '100%'
  },
  labelStyle: {
    color: Colors.white
  },
  valueStyle: {
    flex: 1,
    color: Colors.white,
    padding: 0,
    paddingHorizontal: 5,
    // fontSize: 14,
    // fontFamily: ''
  },
  errorStyle: {
    color: Colors.orange,
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  }
})

export default EMSTextInput;