import { AntDesign, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ViewStyle, TextStyle, StyleProp } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme';
import { IProduct } from '../types';
import ButtonMain, { IButton } from './ButtonMain';

const ButtonFullWidth = ({ onPress, text, containerStyles, textStyles }: IButton) => {
  containerStyles = {...styles.container, ...containerStyles}
  textStyles = { ...styles.text, ...textStyles, }

  const handlePressButton = () => {
    if (onPress) {
      onPress();
    }
  }

  return (
    <ButtonMain onPress={handlePressButton} text={text} textStyles={textStyles} containerStyles={containerStyles}></ButtonMain> 
    )
}

const styles = StyleSheet.create({
  text: {padding: 10, color: Colors.light.white},
  container: {flexDirection: 'row', alignItems: "center", justifyContent: 'center'}})
export default ButtonFullWidth