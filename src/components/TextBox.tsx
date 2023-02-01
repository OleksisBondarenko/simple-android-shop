import React, { ReactNode, useState } from 'react';
import { View,  StyleSheet, TextInput, Pressable, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { StyleProps } from 'react-native-reanimated';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import useColorScheme from '../hooks/useColorScheme';
import { Text } from './Themed';

export interface ITextBox extends TextInputProps, React.ClassAttributes<TextInput> {
  icon?: ReactNode,
  textInputStyles?: TextStyle,
  containerStyles? : ViewStyle,
  onIconPress?: Function,
  defaultValue?: string
}

const TextBox = ({ onChangeText,...props}: ITextBox) => {
  let { icon, defaultValue, onIconPress,  textInputStyles, containerStyles  } = props;

  const [text, setText] = useState<string>("");

  const handleChangeText = (text) => {
    setText(text);

    if (typeof onChangeText == "function") {
      onChangeText(text)
    }
  }

  const handleIconPress = () => {
    if (onIconPress) {
      onIconPress();
    }
  }

  containerStyles = { ...styles.container, ...containerStyles }
  textInputStyles = {...styles.input, ...textInputStyles }

  return (
    <View style={containerStyles}>
      <Pressable onPress={handleIconPress}>{icon}</Pressable>
      <TextInput {...props} style={textInputStyles} onChangeText={handleChangeText} value={text} 
      placeholderTextColor={Colors.light.darkGray} defaultValue={defaultValue} ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 2,
  },
  input: {
    flex: 1,
    borderRadius: 2,
    paddingLeft: 5,
    color: Colors.light.text,
  },

})

export default TextBox