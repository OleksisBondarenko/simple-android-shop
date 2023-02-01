/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  Register: undefined;
  Home: undefined;
  Cart: undefined;
  Login: undefined;
  NotFount: undefined;
  NotVerify: undefined;
  Order: undefined;
  Payment: undefined;
  PlaceOrder: undefined;
  Profile: undefined;
  Shipping: undefined;
  SingleProduct: undefined;
  Settings: undefined;
  ProductScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export interface IReview {
  userName: any,
  text: string,
  score: number,
  date: string,
}

export interface IProduct {
    name: string,
    imageURL: string,
    description: string,
    reviews:  IReview[],
    price: number,
    actualPrice?: number | null,
    isAvailable?: boolean
}

export interface IProductCount extends IProduct {
  count: number,
  key: Symbol
}

export interface IUser {
  name: string,
  email: string,
  role?: string, 
  phoneNumber?: string,
  password: string,
  isActive?: boolean,
  activatedDate: string,
  buyedProducts?: IProductCount [],
  cartProducts?: IProductCount [],
  imageURI: string,
}