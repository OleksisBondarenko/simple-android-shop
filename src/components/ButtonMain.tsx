import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme';
import { MonoText } from './StyledText';

export interface IButton {
  text?: string
  icon?: ReactNode
  onPress?: Function
  containerStyles?: ViewStyle 
  textStyles?: TextStyle
}

const ButtonMain = ({text, icon, onPress, containerStyles, textStyles}: IButton) => {
  const colorScheme = useColorScheme();

  const defaultContainerStyles: ViewStyle = {borderRadius: 60, backgroundColor: Colors[colorScheme].main, flexDirection: 'row', alignItems: 'center' }
  containerStyles = {...defaultContainerStyles, ...containerStyles, }

  const defaultTextSTyles: TextStyle = {color: Colors[colorScheme].text}
  textStyles = {...defaultTextSTyles, ...textStyles, }

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  }

  return (
    <TouchableOpacity onPress={handlePress} style={containerStyles}>
      <Text>{icon}</Text>
      <MonoText style={textStyles}>
        {text}
      </MonoText>
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