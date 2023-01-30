import React, { ReactNode, useRef } from 'react';
import { View, StyleSheet, TextInput, Pressable, TextInputProps } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';
import TextBox from './TextBox';
import Layout from '../constants/Layout';

export interface ISearchBar {
  props?: TextInputProps
  onIconPress?: Function
}

const SearchBar = ({ props, onIconPress }: ISearchBar) => {
  const refInput = useRef<TextInput>(null);
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];

  const handleIconPress = () => {
    if (onIconPress) {
      onIconPress();
    }
    refInput.current?.focus();
    console.log();
  }
  return (
    <View style={{ ...styles.container }}>
      <TextBox props={{ ref: refInput }} icon={
      <View style={[styles.separatorBox]}>
        <FontAwesome name="search" style={styles.icon} onPress={handleIconPress}></FontAwesome>
      <View style={styles.separator}></View></View>
      
      } styles={{ paddingVertical: 10, paddingLeft: 10, paddingRight: -10 }} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.light.darkGray,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  separatorBox: { flex: 1, flexDirection: 'row', alignItems: "center" },
  separator: {
    backgroundColor: Colors.light.darkGray,
    width: 1,
    height: 32,
  },
  icon: {
    fontSize: 20,
    padding: 10,
    color: Colors.light.darkGray,
  }
})

export default SearchBar