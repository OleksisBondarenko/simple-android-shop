import { FontAwesome } from '@expo/vector-icons';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image, Alert, ScrollView } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout';
import userStore from '../store/userStore';
import { IProduct, IReview, IUser } from '../types';
import ButtonMain from './ButtonMain';
import Header3 from './Header3';
import ImagePicker from './ImagePicker';
import TextBoxLogin from './TextBoxLogin';
import { observer} from 'mobx-react-lite';
import useAPIAdress from '../hooks/useAPIAdress';
import axios from 'axios';
import TextBox from './TextBox';
import productStore from '../store/productStore';
import SearchBar from './SearchBar';
import ButtonFullWidth from './ButtonFullWidth';
import loaderStore from '../store/loaderStore';

export interface IUpdateUser {
  user: IUser,
}

const UpdateProduct = observer(() => {
  const api_url = useAPIAdress();
  const products = productStore.foundProducts;
  // const selectProduct useRef<IProduct>({} as IProduct);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>({} as IProduct);

  useEffect(() => {
    console.log(selectedProduct);
    
  }, [selectedProduct])
  

  const handleResetAll = () => {
    setSelectedProduct({} as IProduct);  

    selectedProduct.imageURL = "";
  }

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  }

  const handleUpdate = () => {
    const product = selectedProduct;
    const { name, imageURL, description, price, reviews, actualPrice} = selectedProduct;
    const validFields = !!name && !!imageURL && !!description && !!price && !!reviews && actualPrice 
    
    if (validFields) {
      axios.put(api_url("product"), {id: product._id, product: product}).then(res => {
        updateProducts()
        Alert.alert("Update", "Updated succesfully")
      }) .catch(error => {
        Alert.alert("Error", "Something went wrong...")
      })

    }
    else {
      Alert.alert("Hm...", "Check your fields, probably some of them are empty...")
    }
  }

  const handleAdd = () => {
    const product = selectedProduct;
    const { name, imageURL, description, price, reviews, actualPrice} = selectedProduct;
    const validFields = !!name && !!imageURL && !!description && !!price && !!reviews && !!actualPrice 
    
    if (validFields) {
        axios.post(api_url("product"), { product: {...product}}).then(res => {
          updateProducts()
        Alert.alert("Update", "Updated succesfully")

      }) .catch(error => {
        Alert.alert("Error", "Something went wrong...")
      })

    }
    else {
      Alert.alert("Hm...", "Check your fields, probably some of them are empty...")
    }
  }

  const updateProducts = () => {
    const api = api_url("product/all"); 
    loaderStore.loading()
    axios.get(api).then(data => { loaderStore.fulfilled(); productStore.setAllProducts(data.data)})
  }

  return (
    <View style={styles.content}>
      {/* <ButtonFullWidth onPress={updateProducts} containerStyles={{width: Layout.window.width * 0.9}} text="Update product"></ButtonFullWidth> */}
      <Header3 text='Add new product' style={{ marginVertical: 0 }}></Header3>
      <SearchBar></SearchBar>
      <ScrollView style={{ marginBottom: 5, height: 300, width: Layout.window.width * 0.9}} nestedScrollEnabled={true}>
        {products.map(product => 
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5}} onPress={() => handleProductSelect(product)}>
            <Image style={{height: 80, flex: 3, resizeMode: "contain"}} source={{uri: product.imageURL}} ></Image>
            <Text style={{flex: 7}}>{product.name}</Text>
          </TouchableOpacity>)}
      </ScrollView>

      <View style={styles.textBox}>
        <Header3 style={styles.textBoxLabel} text={'Name'}></Header3>
        <TextBoxLogin value={selectedProduct.name}  containerStyles={styles.textBoxContainer} onChangeText={(text) => setSelectedProduct({...selectedProduct, name: text})  } placeholder={'name'}></TextBoxLogin>
      </View>
      <View style={[styles.textBox]}>
        <Header3 style={styles.textBoxLabel} text={'Description'}></Header3>
        <TextBoxLogin value={selectedProduct.description} onChangeText={(text) => { setSelectedProduct({...selectedProduct, description: text}) }}  placeholder={'description'}           containerStyles={styles.textBoxContainer}></TextBoxLogin>
      </View>
      <View style={[styles.textBox]}>
        <Header3 style={styles.textBoxLabel} text={'Image URL'}></Header3>
        <TextBox value={selectedProduct.imageURL} onChangeText={(text) => setSelectedProduct({...selectedProduct, imageURL: text})} placeholder={'pass'} containerStyles={styles.textBoxContainer}></TextBox>
      </View>
      <View  style={[styles.textBox]}>
        <Header3 style={styles.textBoxLabel} text={'Price'}></Header3>
        <TextBox value={String(selectedProduct.price)} onChangeText={(text) => setSelectedProduct({...selectedProduct, price: Number(text)})} placeholder={'repeat pass'} containerStyles={styles.textBoxContainer}></TextBox>
      </View>
      <View  style={[styles.textBox]}>
        <Header3 style={styles.textBoxLabel} text={'Actual price'}></Header3>
        <TextBox value={String(selectedProduct.actualPrice)} onChangeText={(text) => setSelectedProduct({...selectedProduct, actualPrice: Number(text)})} placeholder={'repeat pass'} containerStyles={styles.textBoxContainer}></TextBox>
      </View>
      <View>
        <View style={[styles.textBox,{justifyContent: 'space-around'} ]}>
        <ButtonMain text="Add" onPress={handleAdd} containerStyles={{ ...styles.spacer, ...styles.button }}></ButtonMain>
        <ButtonMain text="Update selected" onPress={handleUpdate} containerStyles={{ ...styles.spacer, ...styles.button, backgroundColor:'red' }}></ButtonMain>
          {/* <ButtonMain text="Remove" onPress={handleResetAll} containerStyles={{  ...styles.button, backgroundColor: 'red' }}></ButtonMain> */}
        </View>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    marginHorizontal: 'auto',
    backgroundColor: 'transparent'
  },
  error: {
    borderColor: 'red',
  },
  errorText: {
    
    color: 'red'
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Layout.window.width * 0.9,
    padding: 5,

    borderColor: Colors.light.darkGray,
    borderWidth: 1,
    borderStyle: 'solid',

  },
  textBoxLabel: {
    marginBottom: 3,
    borderColor: Colors.light.darkGray,
    borderRightWidth: 1,
    borderStyle: 'solid',
    padding: 5,
    marginHorizontal: 0,

  },
  textBoxContainer: {
    flex: 1,
    borderBottomWidth: 0
  },
  spacer: {
    marginVertical: 20
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20
  }
})

export default UpdateProduct