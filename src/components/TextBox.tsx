import React, { ReactNode } from 'react';
import { View,  StyleSheet, TextInput, Pressable, TextInputProps } from 'react-native';
import { StyleProps } from 'react-native-reanimated';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export interface ITextBox {
  icon?: ReactNode | undefined
  props?: TextInputProps | React.ClassAttributes<TextInput>
  styles?: StyleProps
  onIconPress?: Function,
  defaultValue?: string
}

const TextBox = ({ icon, defaultValue, props, onIconPress,  styles: _styles }: ITextBox) => {
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme];

  const handleIconPress = () => {
    if (onIconPress) {
      onIconPress();
    }
  }
  return (
    <View style={[styles.container]}>
      <Pressable onPress={handleIconPress} style={_styles?.icon}>{icon}</Pressable>
      <TextInput style={[styles.input, {color: theme.text },  _styles]}  placeholderTextColor={theme.darkGray} defaultValue={defaultValue} {...props}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 2,
  },
  icon: {
    // flex: 1,
    // height: "100%",
    // aspectRatio: 1
  },
  input: {
    flex: 1,
    borderRadius: 2,
    paddingLeft: 5,
    // height: 16
    // height: 20,
    // width: 100,
    // backgroundColor: 'red'
  },

})

export default TextBox