import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonFullWidth from '../components/ButtonFullWidth';
import CartProductCard from '../components/CartProductCard';
import Header1 from '../components/Header1';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import userStore from '../store/userStore';

export default observer(() => {
  const navigate = useNavigation();
  const { cartProducts } = userStore.user;

  const handleCheckoutPress = () => {
    if (!cartProducts.length) {
      Alert.alert("Purchase","Your cartr is empty =(");
      return;
    }
    Alert.alert("Purchase", `Are you sure to buy: ${cartProducts.map(product => `\n${product.count} x ${product.name}`)}`, [
      {
        text: "Yes",
        onPress: () => {}
      },
      {
        text: "No",
      }
    ])
  }
  const handleGoHome = () => {
    navigate.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header1 text={"Cart"} styles={styles.header}></Header1>
        <ScrollView style={styles.products}>
          {
            cartProducts?.map((product, index) => {
              return <CartProductCard key={index} productCount={product}/>
            })
          }
        </ScrollView>
        <ButtonFullWidth onPress={handleCheckoutPress} text="Checkout" containerStyles={{ marginBottom: 10 }}></ButtonFullWidth>
        <ButtonFullWidth onPress={handleGoHome} text="Continue buying" textStyles={{ color: Colors.light.main }} containerStyles={{ borderColor: Colors.light.main, borderWidth: 1, backgroundColor: "transparent", marginBottom: 30 }}></ButtonFullWidth>
      </View>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    width: "90%",
    marginHorizontal: "auto"
  },
  products: {
    flex: 1,
    marginBottom: 10
  },
  product: {
    backgroundColor: Colors.light.gray,
    borderRadius: 6,
    marginBottom: 5
  },
  header: {
    paddingTop: 15,
    textAlign: 'center',
    marginBottom: 10
  }
});
