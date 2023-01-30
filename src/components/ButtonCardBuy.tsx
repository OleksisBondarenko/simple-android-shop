import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ViewStyle, TextStyle, StyleProp } from 'react-native'
import Colors from '../constants/Colors'
import userStore from '../store/userStore';
import { IProduct } from '../types';
import ButtonMain, { IButton } from './ButtonMain';

interface ButtonCardBuy extends IButton {
  isBuyed?: boolean,
  product: IProduct
}

const ButtonCardBuy = ({ onPress, isBuyed: _isBuyed, product, containerStyles, textStyles }: ButtonCardBuy) => {
  const navigator = useNavigation();
  const [isBuyed, setIsBuyed] = useState<boolean>(Boolean(_isBuyed));
  containerStyles = {...styles.button, ...containerStyles}
  textStyles = { ...textStyles, }

  const handlePressButton = () => {
    if (onPress) {
      onPress();
    }

    setIsBuyed(true);
    if (!product.isAvailable) {
      Alert.alert("", "Sorry out of stock...")
      return
    } 
    if (isBuyed) {
      navigator.navigate("Cart");
    } else {
      userStore.addCartProduct(product);
      Alert.alert(
        '',
        'Product was added to the cart',
      );
    }
  }

  return (
    <ButtonMain onPress={handlePressButton} icon={<Feather name='shopping-cart' size={24} color={isBuyed ? Colors.light.main : Colors.light.darkGray}></Feather>} containerStyles={containerStyles}></ButtonMain>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    width: 40,
    height: 40,
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.light.darkGray,

  }
})
export default ButtonCardBuy