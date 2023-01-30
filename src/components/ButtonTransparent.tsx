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
      containerStyles={styles.button}
      textStyles={{
        color: Colors[colorScheme].darkGray,
        padding: 10,
      }}
    ></ButtonMain>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },

})
export default ButtonTransparent