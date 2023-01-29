import React from 'react';
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme';
import { View, StyleSheet } from 'react-native'

const HeaderBar = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container,{backgroundColor: Colors[colorScheme]?.black}]}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 30,
  }
})
export default HeaderBar