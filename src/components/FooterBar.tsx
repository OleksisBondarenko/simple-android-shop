import React from 'react';
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme';
import { View, Text, StyleSheet } from 'react-native'

const FooterBar = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container,{backgroundColor: Colors[colorScheme]?.black}]}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 15,
  }
})
export default FooterBar