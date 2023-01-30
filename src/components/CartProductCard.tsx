import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ViewStyle,
  TextStyle,
  StyleProp,
  Image,
  Button,
} from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import productStore from "../store/productStore";
import userStore from "../store/userStore";
import { IProduct, IProductCount } from "../types";
import ButtonMain, { IButton } from "./ButtonMain";
import ProductCounter from "./ProductCounter";
import ProductTextPrice from "./ProductTextPrice";

interface ICartProductCard {
  onPress?: Function;
  productCount: IProductCount;
}

const CartProductCard = ({
  onPress,
  productCount: product,
}: ICartProductCard) => {
  const [isSmall, setIsSmall] = useState<boolean>(true);
  const [lastCount, setLastCount] = useState(product.count);
  const { cartProducts } = userStore.user;

  const handleCounterPress = (count) => {
    const oldProduct = product;
    const newProduct = product.count = count;

    userStore.updateCartProduct(oldProduct, newProduct)

    if (count == 1 && lastCount == 1) {
      Alert.alert("Cart", "Do you really want to remove the item?",
        [
          {
            text: 'Yes',
            onPress: () => userStore.removeCartProduct(product),
          },
          {
            text: 'Cancel',
            onPress: () => { },
            style: 'cancel',
          },
        ])
    }

    setLastCount(count);
  }

  const handlePressCard = () => {
    if (onPress) {
      onPress();
    }

    setIsSmall((state) => !state);
  };

  const containerStyle = isSmall ? styles.container : styles.containerBig;
  const numberOfLines = isSmall ? 2 : 10

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={handlePressCard} style={[styles.item, styles.spacer, styles.info]}>
        <Image style={[styles.item, styles.image, styles.center]} source={{ uri: product.imageURL }}></Image>
        <View style={[styles.center, styles.item]}>
          <Text numberOfLines={numberOfLines}>
            {product.name}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.content]}>
        <View style={[styles.center, styles.spacer]}>
          <ProductTextPrice product={product}></ProductTextPrice>
        </View>
        <View>
          <ProductCounter
            initialCount={product.count}
            onPress={handleCounterPress}
            isVertical
          ></ProductCounter>
        </View>
      </View>
      {/* <View style={[styles.item]}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 40,
    padding: 5,
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 5,

    // backgroundColor: Colors.light.darkGray,
    borderColor: Colors.light.darkGray,
    borderStyle: 'solid',
    borderWidth: 1
  },
  containerBig: {
    flexDirection: 'column',
    alignItems: "flex-end",
    height: 200,
    // width: 200
  },
  info: {
    flex: 1,
    // paddingBottom: 10
    // height: 100,
  },
  item: {
    flex: 1,
    flexDirection: 'row'
  },
  spacer: {
    marginRight: 10,
  },
  itemContent: {
    flexDirection: "row",
  },
  name: {
    fontSize: 12,
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    marginRight: 20,
    backgroundColor: 'white'
  },
  content: {
    // flex: 6,
    flexDirection: "row",
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default CartProductCard;
