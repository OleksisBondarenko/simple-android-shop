import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Header1 from '../components/Header1';
import useColorScheme from '../hooks/useColorScheme';
import TextBox from '../components/TextBox';
import TextBoxPassword from '../components/TextBoxPassword';
import ButtonMain from '../components/ButtonMain';
import ButtonTransparent from '../components/ButtonTransparent';
import TextBoxLogin from '../components/TextBoxLogin';

export default function LoginScreen() {
  const navigator = useNavigation();
  const colorScheme = useColorScheme();

  const handleLogin = () => {
    navigator.navigate("Home")
  }

  const handleGoSignUp  = () => {
    navigator.navigate("Register")
  } 

  return (

    <View  style={{...styles.container, backgroundColor: `${Colors[colorScheme].main}`,}}>
      <View style={styles.backgorundImage} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Header1 text={'LOGIN'} />
        </View>
        <View style={styles.textInput}>
          <TextBoxLogin icon={<AntDesign name="mail" size={24} color={Colors[colorScheme].main} />} />
        </View>
        <View style={styles.textInput}>
          <TextBoxPassword ></TextBoxPassword>
        </View>
        <ButtonMain text="LOGIN" onPress={handleLogin}></ButtonMain>
        <ButtonTransparent text="Sign up" onPress={handleGoSignUp}></ButtonTransparent>
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
  }
});
