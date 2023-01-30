import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { IProduct } from "../types";
import ButtonCardBuy from "./ButtonCardBuy";
import ReviewStars from "./ReviewStars";
import productStore from "../store/productStore";
import ProductTextPrice from "./ProductTextPrice";

export interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  const { name, imageURL, reviews, price, actualPrice, isAvailable } = product;
  const navigation = useNavigation();

  const handleProductPress = () => {
    productStore.setSelectedProduct(product);
    navigation.navigate("ProductScreen");
  };

  return (
    <View style={styles.content}>
      <View style={styles.center}>
        <TouchableOpacity onPress={handleProductPress} >
          <Image
            source={{ uri: imageURL } as ImageSourcePropType}
            style={[styles.image]}
          />
          <Text numberOfLines={2} style={styles.name}>
            {name}
          </Text>
          <View style={styles.reviews}>
            <ReviewStars reviews={product.reviews}></ReviewStars>
            <Text style={{ marginBottom: 2 }}>
              {String(product.reviews.length)}
            </Text>
          </View>
          <View style={styles.bottom}>
            <ProductTextPrice product={product}/>
          {!isAvailable || (
        <ButtonCardBuy
          product={product}
          containerStyles={{ padding: 5 }}
        ></ButtonCardBuy>
      )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    position: "relative",
    paddingBottom: 10,
    alignItems: "center",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
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
export default ProductCard;
