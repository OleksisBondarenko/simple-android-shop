import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

interface IButton {
  text?: string, 
  onPress?: Function,
}

const ButtonMain = ({text, onPress}: IButton) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.mainButton}>
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 60,
    backgroundColor: Colors["light"].main,
  },
  text: {
    color: Colors['light'].white
  }
})
export default ButtonMain