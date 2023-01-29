import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const BottomBar = () => {


  return (
    <View style={styles.bar}>
      <TouchableOpacity style={styles.item} containerStyle={styles.item}>
        <FontAwesome style={styles.side} name='home' size={24} color={Colors.light.main}/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.center} containerStyle={styles.item}>
        <FontAwesome  name='shopping-basket' size={28} color={Colors.light.white} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} containerStyle={styles.item}>
        <FontAwesome style={styles.side} name='user' size={24} color={Colors.light.main}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    position: 'relative',
    paddingHorizontal: 20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: '10',
    height: 40,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    flex: 1,
    position: 'absolute',
    height: 60,
    width: 60,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.main,
    borderRadius: 100,
    top: -30,
    // left: -30
  },
  side: {
    flex: 1,
    padding: 10
  }
})
export default BottomBar