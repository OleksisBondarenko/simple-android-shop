import React, { ReactNode } from 'react';
import { View,  StyleSheet, TextInput, Pressable, TextInputProps } from 'react-native';
import Colors from '../constants/Colors';
import TextBox, { ITextBox } from './TextBox';


const TextBoxLogin = (props: ITextBox) => {
  const textInputStyles = {...styles.textBox, ...props.textInputStyles}
  const containerStyles = {...styles.container, ...props.containerStyles}

  return (
      <TextBox {...props} textInputStyles = {textInputStyles} containerStyles={containerStyles}/>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    borderColor: 'transparent',
    borderBottomColor: Colors.light.darkGray,
    borderWidth: 1,
    borderStyle: 'solid',
  }, 
  textBox: {
    height: 24,
    width: 32
  }
})

export default TextBoxLogin