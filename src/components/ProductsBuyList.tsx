import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { MOCK_PRODUCTS_LIST } from '../assets/static'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import { IProduct } from '../types'
import Header3 from './Header3'
import ProductCard from './ProductCard'
import productStore from '../store/productStore'


interface IProductBuyList {
  title?: string 
  products?: IProduct[]
}
const ProductsBuyList = ({title = 'All the products' }: IProductBuyList) => {
  const { foundProducts: products } = productStore;

  return (
    <ScrollView style={styles.wrapper}>
      <Header3 text={title}></Header3>
      <View style={styles.container}>
        {
          products.map((product, index) => {
            return <View key={product.name} style={[styles.content, styles.border, index % 2 ? styles.rightBorder : null]}>
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
    flex: 1,
    backgroundColor: Colors.light.background
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 30

  },
  content: {
    width: '50%'
  },
  rightBorder: {
    borderLeftWidth: 1,
  },
  border: {
    
    borderColor: Colors.light.darkGray,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  }
})

export default ProductsBuyList