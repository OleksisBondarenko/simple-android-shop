import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import useColorScheme from '../hooks/useColorScheme';
import { IHeader } from './Header1';
import { useThemeColor } from './Themed';



const Header3 = ({text, styles: _styles}: IHeader) => {
  const colorScheme = useColorScheme();

  return (
      <Text style={[{...styles.header, color: Colors[colorScheme].text}, _styles]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
    marginHorizontal: Layout.window.width * 0.05,
  }
})

export default Header3