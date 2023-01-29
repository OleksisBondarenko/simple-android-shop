import React from 'react'
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import { IProduct } from '../types'

interface IProductCard {
  product: IProduct
}

const ProductCard = ({product}: IProductCard) => {
  const {name, imageURL, reviews, price, actualPrice} = product;

  return (
    <View style={styles.content}> 
            <Image source={imageURL as ImageSourcePropType} style={[styles.image]}/>
            <Text numberOfLines={2} style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '90%',
    aspectRatio: 1,
    margin: "auto"
  },
  name: {
    width: '90%',
    margin: "auto"
  }
})
export default ProductCard