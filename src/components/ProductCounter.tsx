import React, { useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme';
import ButtonMain from './ButtonMain';
import { MonoText } from './StyledText';
import { ViewProps } from './Themed';

interface ProductCounter {
  onPress?: Function,
  initialCount?: number,
  isVertical?: boolean
}

const ProductCounter = ({ onPress, initialCount=1}: ProductCounter) => {
  const colorScheme = useColorScheme();

  const [count, setCount] = useState<number>(initialCount);

  const handlePress = (type: 'increment'  | 'decrement') => {
    setCount(prev => {
      const addValue = type === "increment" ? 1 : -1;
      let newCount = prev + addValue;

      if (newCount < 1) {
        newCount = 1;
      }
      
      if (onPress) {
        onPress(newCount);
      }

      return newCount;
    })
  }


  return (
    <View style={[styles.content, styles.center]}>
      <ButtonMain
        text={"-"}
        onPress={() => handlePress("decrement")}
        containerStyles={{...styles.button, ...styles.center}}
        textStyles={{
          color: Colors[colorScheme].text
        }}
      ></ButtonMain>
      <View style={[styles.textContainer, styles.center]}>
        <Text style={[styles.text]}>{count}</Text>
      </View>
      <ButtonMain
        text={"+"}
        onPress={() => handlePress("increment")}
        containerStyles={{...styles.button, ...styles.center}}
        textStyles={{
          color: Colors[colorScheme].text
        }}
      ></ButtonMain>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    height: "100%",
    borderColor: Colors.light.darkGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  text: {
    paddingHorizontal: 10,
  },
  button: {
    paddingHorizontal: 15,
    padding: 6,
    borderRadius: 0,
  },
  buttonLeft: {

  }

})
export default ProductCounter