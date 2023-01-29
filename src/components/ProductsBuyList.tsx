import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { MOCK_PRODUCTS_LIST } from '../assets/static'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import { IProduct } from '../types'
import Header3 from './Header3'
import ProductCard from './ProductCard'

interface IProductBuyList {
  products?: IProduct[]
}
const ProductsBuyList = ({ products = MOCK_PRODUCTS_LIST }: IProductBuyList) => {

  return (
    <ScrollView style={styles.wrapper}>
      <Header3 text={'Recomendations'}></Header3>
      <View style={styles.container}>
        {
          [...products, ...products, ...products, ...products].map((product, index) => {
            return <View key={product.name} style={[styles.content, index % 2 ? styles.rightBorder : null]}>
              <ProductCard product={product}></ProductCard>
            </View>
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // gap: 5

  },
  content: {
    // width: Layout.window.width / 2 - Layout.window.width * 0.06
    width: 'calc(50%)'
  },
  rightBorder: {
    borderColor: "transparent",
    borderLeftColor: Colors.light.lightblack,
    borderStyle: 'solid',
  },
})
export default ProductsBuyList