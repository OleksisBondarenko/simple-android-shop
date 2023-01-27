import React, { ReactNode } from 'react';
import { View,  StyleSheet, TextInput, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export interface ITextBox {
  icon?: ReactNode | undefined
  placeholder?: string
  secureTextEntry?: boolean
  onIconPress?: Function
}

const TextBox = ({ icon, placeholder,onIconPress,secureTextEntry }: ITextBox) => {
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme];

  const handleIconPress = () => {
    if (onIconPress) {
      onIconPress();
    }
  }
  return (
    <View style={{ ...styles.container }}>
      <Pressable onPress={handleIconPress}>{icon}</Pressable>
      <TextInput style={{ ...styles.input, color: theme.text }} placeholder={placeholder} placeholderTextColor={theme.lightblack} secureTextEntry={secureTextEntry}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderBottomColor: Colors.light.lightblack,
    borderWidth: 2,
    borderStyle: 'solid',
    paddingBottom: 2,

  },
  icon: {
    padding: 5,
  },
  input: {
    width: "80%",
    borderRadius: 2,
    marginLeft: 10,
  },

})

export default TextBox