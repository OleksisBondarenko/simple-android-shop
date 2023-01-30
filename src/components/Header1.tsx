import React from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useThemeColor } from './Themed';

export interface IHeader {
  text: string, 
  styles?: TextStyle
}

const Header1 = ({text, styles: _styles}: IHeader) => {
  const colorScheme = useColorScheme();

  return (
      <Text style={[{...styles.header, color: Colors[colorScheme].text}, _styles]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
  }
})

export default Header1