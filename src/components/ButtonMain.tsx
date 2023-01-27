import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme';

interface IButton {
  text?: string
  onPress?: Function
  paddingVertical?: number
  paddingHorizontal?: number
  borderRadius?: number
  color?: string,
  backgroundColor?: string,
}

const ButtonMain = ({text, onPress, ...props}: IButton) => {
  const colorScheme = useColorScheme();

  const {paddingVertical = 10, paddingHorizontal = 40, borderRadius = 60, color = Colors[colorScheme].white, backgroundColor = Colors[colorScheme].main } = props

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  }

  return (
    <TouchableOpacity onPress={handlePress} style={{backgroundColor, paddingVertical, paddingHorizontal, borderRadius}}>
      <Text style={{color}}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  // mainButton: {
  //   backgroundColor: Colors["light"].main,
  // },
  // text: {
  //   color: Colors['light'].white
  // }
})
export default ButtonMain