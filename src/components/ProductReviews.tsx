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
import Layout from "../constants/Layout";
import { IProduct, IReview } from "../types";
import ButtonCardBuy from "./ButtonCardBuy";
import ReviewStars from "./ReviewStars";
import productStore from "../store/productStore";
import Header3 from "./Header3";

interface IProductReviews {
  reviews: IReview[];
}

const ProductReviews = ({ reviews }: IProductReviews) => {

  return (
    <View style={styles.container}>
      {
        reviews.map((review, index) => <View key={review.userName + index} style={styles.content}>
          <Header3 text={review.userName} style={{marginHorizontal: 0}}></Header3>
          <ReviewStars reviews={[review]} ></ReviewStars>
          <Text style={styles.spacer}>{review.date}</Text>
          <Text style={styles.spacer}>{review.text}</Text>
        </View>)
      }

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
  spacer: {
    marginBottom: 5,
  },
  content: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: Colors.light.lightGray,
  },

});
export default ProductReviews;
