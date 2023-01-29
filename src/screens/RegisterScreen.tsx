import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import ButtonMain from '../components/ButtonMain';
import ButtonTransparent from '../components/ButtonTransparent';
import Header1 from '../components/Header1';
import TextBox from '../components/TextBox';
import TextBoxLogin from '../components/TextBoxLogin';
import TextBoxPassword from '../components/TextBoxPassword';

import { View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import useColorScheme from '../hooks/useColorScheme';

export default function RegisterScreen() {
  const colorScheme = useColorScheme();
  const navigate = useNavigation();

  const handleRegister = () => {
    navigate.navigate("Login");
  
  }

  const handleGoLogin = () => {
    navigate.navigate("Login");
  }

  return (
    <View  style={{...styles.container, backgroundColor: `${Colors[colorScheme].main}`,}}>
      <View style={styles.backgorundImage}></View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Header1 text={'REGISTER'} />
        </View>

        <View style={styles.textInput}>
          <TextBoxLogin icon={<AntDesign name="user" size={24} color={Colors[colorScheme].main} />} />
        </View> 
        <View style={styles.textInput}>
          <TextBoxLogin icon={<AntDesign name="mail" size={24} color={Colors[colorScheme].main} />} />
        </View>
        <View style={styles.textInput}>
          <TextBoxPassword ></TextBoxPassword>
        </View>
        <View style={styles.textInput}>
          <TextBoxPassword ></TextBoxPassword>
        </View>
        <ButtonMain text="SIGN UP" onPress={handleRegister}></ButtonMain>
        <ButtonTransparent text="Already have account?" onPress={handleGoLogin}></ButtonTransparent>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    boxSizing: "border-box",
    paddingBottom: 200
  }, 
  header: {
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  backgorundImage: {
    position: 'absolute',
    height: Layout.window.height - Layout.window.height * 0.2  ,
    width: Layout.window.height - Layout.window.height * 0.2,
    left: -1 * Layout.window.height * 0.5,
    transform: [{ rotate: '45deg' }]
  },
  content: {
    padding: 5,
    flex: 1,
    width: Layout.window.width * 0.8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInput: {
    width: Layout.window.width * 0.5,
    paddingBottom: 15,
    backgroundColor: "transparent",
  },
});