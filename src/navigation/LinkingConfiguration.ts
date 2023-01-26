/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Login: "login",
          Register: "register",
          Cart: "cart",
          NotVerify: "notVerify",
          Order: "order",
          Payment: "payment",
          PlaceOrder: "placeOrder",
          Profile: "profile",
          Settings: "settings",
          Shipping: "shipping",
          SingleProduct: "singleProduct",
          
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
