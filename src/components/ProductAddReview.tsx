import { useNavigation } from "@react-navigation/native";
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { IProduct, IReview, IUser } from "../types";
import ButtonCardBuy from "./ButtonCardBuy";
import ReviewStars from "./ReviewStars";
import productStore from "../store/productStore";
import Header3 from "./Header3";
import { TextInput } from "react-native-gesture-handler";
import ButtonMain from "./ButtonMain";

interface IProductReviews {
  user: IUser
}

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    // @ts-ignore
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};




const ProductReviews = ({ user }: IProductReviews) => {
 


  return (
    <View style={styles.container}>
      <TextInput ></TextInput>
      <TextInput ></TextInput>
      <ButtonMain></ButtonMain>
    </View>
  );  
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    marginBottom: 10
  }, 
  textInput: {

  }
});

export default ProductReviews;
