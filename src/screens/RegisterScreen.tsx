import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
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
import userStore from '../store/userStore';
import { IUser } from '../types';
import useAPIAdress from '../hooks/useAPIAdress';

export default function RegisterScreen() {
  const colorScheme = useColorScheme();
  const navigate = useNavigation();
  const api_url = useAPIAdress();

  const refName = useRef<string>("");
  const refEmail = useRef<string>("");
  const refPass = useRef<string>("");
  const refRePass = useRef<string>("");
  
  const [isNameCorrect, setIsNameCorrect] = useState<boolean>(false)
  const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(false)
  const [isRePassCorrect, setIsRePassCorrect] = useState<boolean>(false)
  const [isPassCorrect, setIsPassCorrect] = useState<boolean>(false)
  
  const handleRegister = async () => {
    const user = {
      activatedDate: "01 jan 2023",
      name: refName.current.toLocaleLowerCase(),
      email: refEmail.current.toLocaleLowerCase(),
      password: refPass.current.toLocaleLowerCase(),
    } as IUser
    
    if (isNameCorrect && isEmailCorrect && isRePassCorrect && isPassCorrect) {      
      axios.post(api_url("user/register"), user).then(res => {
        Alert.alert("Register", `User was created. username: ${user.name}`);
        navigate.navigate("Login");
      }).catch((err) => console.log(err))
    } else {
      Alert.alert("Register", "Something is wrong.")
    } 
  }

  const handleGoLogin = () => {
    navigate.navigate("Login");
  }

  const validateEmail = () => {
    const text = refEmail.current;

    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (reg.test(text)) {
      if (text.includes("@")){
      refEmail.current = text;
      setIsEmailCorrect(true)
      console.log("Email is Correct");
    }
    else {
      console.log("Email is Not Correct");
      Alert.alert("Error", "Email is wrong...");
      setIsEmailCorrect(false);
      return false;
    }
  }

  const validatePass = () => {
    const password = refPass.current;
    const validPass = password.length >= 6;

    setIsPassCorrect(validPass)
  }

  const validateName = () => {
    const name = refName.current;
    const valid = name.length >= 3;

    setIsNameCorrect(valid)
  }

  const validateRePass = () => {
    const password = refPass.current;
    const rePassword = refRePass.current;

    const validRePass = password === rePassword;
    const valid = validRePass;

    setIsRePassCorrect(valid)
  }

  const nameFieldStyle =   (refName.current.length   && !isNameCorrect)   ? styles.error : {};
  const passFieldStyle =   (refPass.current.length   && !isPassCorrect)   ? styles.error : {};
  const rePassFieldStyle = (refRePass.current.length && !isRePassCorrect) ? styles.error : {};
  const emailFieldStyle =  (refEmail.current.length  && !isEmailCorrect)  ? styles.error : {};

  return (
    <View  style={{...styles.container, backgroundColor: `${Colors[colorScheme].main}`,}}>
      <Text>{refName.current}</Text>
      <View style={styles.backgorundImage}></View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Header1 text={'REGISTER'} />
        </View>

        <View style={styles.textInput}>
          <TextBoxLogin containerStyles={nameFieldStyle} onChangeText={text => refName.current = text} onBlur={validateName} icon={<AntDesign name="user" size={24} color={Colors[colorScheme].main} />} />
          {!(refName.current.length && !isNameCorrect) || <Text style={styles.errorText}>Login should be more than 3 symbols</Text>}
        </View> 
        <View style={styles.textInput}>
          <TextBoxLogin containerStyles={emailFieldStyle} onChangeText={text => refEmail.current = text} onBlur={validateEmail} icon={<AntDesign name="mail" size={24} color={Colors[colorScheme].main} />} />
          {!(refPass.current.length   && !isEmailCorrect) || <Text style={styles.errorText}>Wrong email</Text>}
        </View>
        <View style={styles.textInput}>
          <TextBoxPassword containerStyles={passFieldStyle} onChangeText={text => { refPass.current = text; validatePass()}} onBlur={validatePass}></TextBoxPassword>
          {!(refRePass.current.length && !isPassCorrect) || <Text style={styles.errorText}>Password should be more than 6 symbols</Text>}
        </View>
        <View style={styles.textInput}>
          <TextBoxPassword containerStyles={rePassFieldStyle} onChangeText={ text => { refRePass.current = text; validateRePass() }} onBlur={validateRePass}></TextBoxPassword>
          {!(refEmail.current.length  && !isRePassCorrect) || <Text style={styles.errorText}>Passwords should be the same</Text>}
       
        </View>
        <ButtonMain text="SIGN UP" onPress={handleRegister} containerStyles={{paddingVertical: 10, paddingHorizontal: 40, marginBottom: 15}}></ButtonMain>
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
  error: {
    borderColor: 'red',
  },
  errorText: {
    
    color: 'red'
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