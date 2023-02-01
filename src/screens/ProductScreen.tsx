import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Platform, ScrollView, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { IProduct } from '../types';
import productStore from '../store/productStore';
import Header3 from '../components/Header3';
import ReviewStars from '../components/ReviewStars';
import ButtonMain from '../components/ButtonMain';
import ProductCounter from '../components/ProductCounter';
import ProductReviews from '../components/ProductReviews';
import Colors from '../constants/Colors';
import userStore from '../store/userStore';
import ButtonFullWidth from '../components/ButtonFullWidth';
import { useNavigation } from '@react-navigation/native';
import ProductTextPrice from '../components/ProductTextPrice';
import ImagePicker from '../components/ImagePicker';

interface IProductScreen {
  product: IProduct
}

export default function ProductScreen() {
  const { selectedProduct: product } = productStore;
  const navigator = useNavigation(); 
  
  const [buyCount, setBuyCount] = useState<number>(1);

  const handleAddProduct  = () => {
    
    Alert.alert("Cart", `You want ot add ${buyCount} of ${product.name} to the cart. Is it right?`,
        [
          {
            text: 'Yes',
            onPress: () => userStore.addCartProduct(product, buyCount),
          },
          {
            text: 'Cancel',
            onPress: () => { },
            style: 'cancel',
          },
        ])
  }

  const handleBuyCountChange = (count) => {
    setBuyCount(count)
  }


  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
          <Image style={styles.image} source={{ uri: product.imageURL }} />
        <Header3 text={product.name} style={{ marginHorizontal: 0 }} />
        <View style={[styles.reviews, styles.spacer]}>
          <ReviewStars reviews={product.reviews} />
          <Text style={{ marginLeft: 5 }}>{product.reviews.length} reviews</Text>
        </View>
        <View style={[styles.counter, styles.spacer]}>
           <View>
           { !product.isAvailable || <ProductCounter onPress={handleBuyCountChange}/> }
          </View> 
          <ProductTextPrice product={product}></ProductTextPrice>
        </View>
        <View style={styles.spacer}>
          <Text>
            {product.description}
          </Text>
        </View>
        {!product.isAvailable || <ButtonFullWidth onPress={handleAddProduct} text="Add to cart" ></ButtonFullWidth>}
        <Header3 text="Review" style={{marginHorizontal: 0}}></Header3>
        <View>
          <ProductReviews reviews={product.reviews}></ProductReviews>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: "5%",
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain'

  },
  reviews: {
    flexDirection: "row",
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacer: {
    marginBottom: 10,
  }

});
