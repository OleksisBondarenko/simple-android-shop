import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DEFAULT_USER_IMAGE } from '../assets/static';
import Header3 from '../components/Header3';
import UpdateUser from '../components/UpdateUser';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import userStore from '../store/userStore';
import ButtonMain from '../components/ButtonMain';
import ImagePicker from '../components/ImagePicker';
import { observer} from 'mobx-react-lite';
import UpdateProduct from '../components/UpdateProduct';

enum Menu {
  user,
  product
}

export default observer(() => {
  const { user, newImageURI } = userStore;
  const navigation = useNavigation();
  const [selectedMenuName, setSelectedMenuName] = useState<Menu>(Menu.user);

  const handleGoHome = () => {
    navigation.navigate("Home")
  }

  const handleSelectMenu = (menu: Menu) => {
    setSelectedMenuName(menu);
  }
  
  const handleSignOut = () => {
    user.isActive = false;
    navigation.navigate("Login");
  }
  const newMenu = selectedMenuName === Menu.user ? <UpdateUser user={user} /> : <UpdateProduct />;
   

  return (
    <ScrollView style={[styles.container, styles.flex1]} nestedScrollEnabled={true}>
      <View style={[styles.top]}>
        <View style={[styles.center, styles.transparent]}>
          <Image style={styles.image} source={{ uri: newImageURI || (user.imageURI ?? DEFAULT_USER_IMAGE) }}></Image>
        </View>
        <View style={[styles.center, styles.transparent]}>
          <Header3 text={user.name} style={styles.text}></Header3>
        </View>
        <View style={[styles.center, styles.transparent]}>
          <Text style={styles.text}>registered {user.activatedDate}</Text>
        </View>
      </View>
      <View style={[styles.buttons]}>
        <TouchableOpacity style={[styles.center, styles.button, styles.flex1]} onPress={() => handleSelectMenu(Menu.product)}><Header3 text={'Products'}></Header3></TouchableOpacity>
        <ButtonMain containerStyles={{...styles.center, ...styles.button, ...styles.flex1}} onPress={handleGoHome} icon={<Header3 text={'Go home'}></Header3>}></ButtonMain>
        <TouchableOpacity style={[styles.center, styles.button, styles.flex1]} onPress={() => handleSelectMenu(Menu.user)}><Header3 text={'Profile'}></Header3></TouchableOpacity>
      </View>

      <View style={[styles.spacer, styles.transparent]}>
        {newMenu}
      </View>
      
      <View style={[styles.buttons]}>
      <ButtonMain containerStyles={{...styles.center, ...styles.button, ...styles.flex1}} onPress={handleSignOut} icon={<Header3 text={'Sign out'}></Header3>}></ButtonMain>
      </View>
    </ScrollView>
  );
})

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.light.red
  },
  flex1: {
    flex: 1,
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  top: {
    backgroundColor: Colors.light.main,
    paddingVertical: 10,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: Layout.window.height * 0.2,
    height: Layout.window.height * 0.2,
    aspectRatio: 1
  },
  spacer: {
    // paddingVertical: 10,
    flex: 1,
  },
  text: {
    color: Colors.light.white
  },
  buttons: {
    margin: 10,
    height: 40,
    flexDirection: 'row',
  },
  button: {

  }
});
