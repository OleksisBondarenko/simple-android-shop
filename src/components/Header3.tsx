import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useThemeColor } from './Themed';

const Header3 = ({text}) => {
  const colorScheme = useColorScheme();

  return (
      <Text style={{...styles.header, color: Colors[colorScheme].text}}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10
  }
})

export default Header3