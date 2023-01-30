import { FontAwesome } from '@expo/vector-icons';
import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import Colors from '../constants/Colors'
import { IProduct, IReview } from '../types';

export interface IReviewStars {
  reviews: IReview [],
  rate?: number,
  maxRate?: number,
}

const ReviewStars = ({ reviews, maxRate = 5 }: IReviewStars) => {
  const rate = reviews.reduce((prev, curr) => prev + curr.score, 0) / reviews.length;

  return (
    <View style={styles.content}>
      {Array.from(Array(maxRate).keys()).map((value) => {
        const star = (Math.round(rate) >= value + 1 ? "star" : "star-o")

        return <FontAwesome key={value} style={styles.image} name={star}></FontAwesome>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 5,
  },
  image: {
    height: 14,
    aspectRatio: 1,
    color: Colors.light.main
  }
})

export default ReviewStars