import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme';
import ButtonMain from './ButtonMain';

interface IButton {
  text?: string,
  onPress?: Function
}

const ButtonTransparent = ({ text, onPress }: IButton) => {
  const colorScheme = useColorScheme();
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  }

  return (
    <ButtonMain
      text={text}
      onPress={handlePress}
      paddingHorizontal={10}
      backgroundColor={'transparent'}
      color={Colors[colorScheme].lightblack}
    ></ButtonMain>
  )
}

const styles = StyleSheet.create({
  mainButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 60,
    backgroundColor: "transparent",
  },
  text: {
    color: Colors['light'].lightblack,
    // fontWeight: "bold"
  }
})
export default ButtonTransparent