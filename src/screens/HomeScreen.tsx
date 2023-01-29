import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import SearchBar from '../components/SearchBar';
import Header3 from '../components/Header3';
import Layout from '../constants/Layout';
import BottomBar from '../components/MainMenuBar';
import ProductsBuyList from '../components/ProductsBuyList';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  const navigate = useNavigation();
  const handleGoToRegister = () => {
    navigate.navigate("Login");
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={[styles.searchBar]}>
          <SearchBar></SearchBar>
        </View>
        {/* <ScrollView style={styles.content}> */}
          <ProductsBuyList></ProductsBuyList>
        {/* </ScrollView> */}
        {/* <Button title="I have account" onPress={handleGoToRegister}></Button> */}

        <View>
          <BottomBar></BottomBar>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flex: 1,
    paddingVertical: 5,
    paddingBottom: 10
  },
  container: {
    flex: 1,
    marginHorizontal: Layout.window.width * 0.05,
  },
  searchBar: {
    marginBottom: 15
  },
  content: {
    flex: 1,
    backgroundColor: 'red'
  }
});
