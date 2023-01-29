import React, { ReactNode } from 'react';
import { View,  StyleSheet, TextInput, Pressable, TextInputProps } from 'react-native';
import Colors from '../constants/Colors';
import TextBox, { ITextBox } from './TextBox';

const TextBoxLogin = (props: ITextBox) => {
  return (
    <View style={{ ...styles.container }}>
      <TextBox _styles={styles.textBox} {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    borderColor: 'transparent',
    borderBottomColor: Colors.light.lightblack,
    borderWidth: 1,
    borderStyle: 'solid',
  }, 
  textBox: {
    height: 32,
    width: 32
  }
})

export default TextBoxLogin