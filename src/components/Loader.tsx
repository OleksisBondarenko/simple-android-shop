import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import useColorScheme from '../hooks/useColorScheme';
import { IHeader } from './Header1';
import { useThemeColor } from './Themed';



const Loader = () => {
  const colorScheme = useColorScheme();

  return (
      <View style={styles.loader}>
        <Text style={[{...styles.text}]}>{"Loading..."}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    width: Layout.window.width,
    height: Layout.window.height,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
    marginHorizontal: Layout.window.width * 0.05,
  }
})

export default Loader