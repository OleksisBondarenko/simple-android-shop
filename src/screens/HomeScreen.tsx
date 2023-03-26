import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import SearchBar from '../components/SearchBar';
import Header3 from '../components/Header3';
import Layout from '../constants/Layout';
import BottomMenuBar from '../components/BottomMenuBar';
import ProductsBuyList from '../components/ProductsBuyList';
import ProductCard from '../components/ProductCard';
import userStore from '../store/userStore';
import useAPIAdress from '../hooks/useAPIAdress';
import axios from "axios";
import { observer } from 'mobx-react-lite';
import productStore from '../store/productStore';
import ButtonFullWidth from '../components/ButtonFullWidth';
import loaderStore from '../store/loaderStore';

export default observer(function HomeScreen() {
  const navigate = useNavigation();
  const api_url = useAPIAdress();

  useEffect(() => {
    // const api = api_url("product/all");
    // fetch(api).then(res => res.json()).then(data => { productStore.setAllProducts(data)})
  }, [])

  const handleGoToRegister = () => {
    navigate.navigate("Login");
  }

  const updateProducts = () => {
    const api = api_url("product/all"); 
    axios.get(api).then(data => { console.log(data)})
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={[styles.searchBar, styles.marginCenter]}>
          <SearchBar></SearchBar>
          <ButtonFullWidth onPress={updateProducts} containerStyles={{width: Layout.window.width * 0.9, marginTop: 10}} text="Update product"></ButtonFullWidth>
      
        </View >
        <View style={styles.products}>
          <ProductsBuyList></ProductsBuyList>
        </View>
        {/* <View > */}
          <BottomMenuBar></BottomMenuBar>
        {/* </View> */}
      </View>
    </View>
  );
})

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flex: 1,
    paddingVertical: 5,
    paddingBottom: 10
  },
  container: {
    flex: 1,
  },
  marginCenter: {
    paddingHorizontal: Layout.window.width * 0.05,
  },
  products: {
    flex: 1,
  },
  searchBar: {
    paddingBottom: 15,
    marginBottom: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,

    elevation: 2,
  },
  content: {
    flex: 1,
    backgroundColor: 'red'
  }
});
