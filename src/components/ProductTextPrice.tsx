import React, { ReactNode } from 'react';
import { View, StyleSheet, TextInput, Pressable, TextInputProps } from 'react-native';
import { StyleProps } from 'react-native-reanimated';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ButtonCardBuy from './ButtonCardBuy';
import { IProductCard } from './ProductCard';
import { Text } from './Themed';

const ProductTextPrice = ({ product }: IProductCard) => {
  const { price, actualPrice, isAvailable } = product;


  return (
    <View style={styles.content}>
      <View>
        {actualPrice ? (
          <Text style={[styles.oldPrice]}>
            {price}
            <Text style={[styles.oldPrice, styles.currencyIcon]}>₴</Text>
          </Text>
        ) : null}
        <Text
          style={[
            styles.actualPrice,
            !actualPrice ? styles.price : null,
            !isAvailable ? styles.outPrice : null,
          ]}
        >
          {actualPrice ?? price}
          <Text style={[styles.actualPrice,
            !actualPrice ? styles.price : null,
            !isAvailable ? styles.outPrice : null, styles.currencyIcon]}>₴</Text>
        </Text>
        {!isAvailable ? <Text>Закінчився</Text> : null}
      </View>
    </View>

  )
}



const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  oldPrice: {
    fontSize: 12,
    color: Colors.light.darkGray,
    textDecorationLine: "line-through",
  },
  price: {
    color: Colors.light.text,
  },
  actualPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.red,
  },
  outPrice: {
    color: Colors.light.darkGray,
  },
  currencyIcon: {
    fontSize: 10,
  },
  center: {
    width: "90%",
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  name: {
    marginBottom: 10,
    height: 40
  },
  reviews: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 5,
  },
});


export default ProductTextPrice