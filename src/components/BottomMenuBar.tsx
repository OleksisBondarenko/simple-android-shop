import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors';
import userStore from '../store/userStore';

const BottomMenuBar = () => {
  const { user } = userStore;
  const navigator = useNavigation()

  const handleHomePress = () => {
    console.log("Home press");
    // navigator.navigate("Home");
  }

  const handleCartPress = () => {
    navigator.navigate("Cart");
  }

  const handleUserPress = () => {
    console.log({...user});
    
    if (user.isActive) {
      navigator.navigate("Profile");
    } else {
      navigator.navigate("Login");
    }
  }


  return (
    <View  style={styles.bar}>
      <TouchableOpacity onPress={handleHomePress} style={styles.item}>
        <FontAwesome style={styles.side} name='home' size={24} color={Colors.light.main}/>
      </TouchableOpacity>
      
      <View style={styles.item}>
      <TouchableOpacity onPress={handleCartPress} style={styles.center}>
        <FontAwesome  name='shopping-basket' size={28} color={Colors.light.white} />
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleUserPress} style={styles.item}>
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
    height: 40,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  center: {
    flex: 1,
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
export default BottomMenuBar