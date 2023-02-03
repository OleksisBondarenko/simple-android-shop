import { FontAwesome } from '@expo/vector-icons';
import React, { ReactNode, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image, Alert } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout';
import userStore from '../store/userStore';
import { IProduct, IReview, IUser } from '../types';
import ButtonMain from './ButtonMain';
import Header3 from './Header3';
import ImagePicker from './ImagePicker';
import TextBoxLogin from './TextBoxLogin';
import TextBoxPassword from './TextBoxPassword';
import { observer} from 'mobx-react-lite';
import useAPIAdress from '../hooks/useAPIAdress';
import axios from 'axios';

export interface IUpdateUser {
  user: IUser,
}

const UpdateUser = ({ user }: IUpdateUser) => {
  const refUser = useRef<IUser>({ ...user });
  const refRePass = useRef<string>(user.password);
  const api_url = useAPIAdress();

  const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(true)
  const [isRePassCorrect, setIsRePassCorrect] = useState<boolean>(true)
  const [isPassCorrect, setIsPassCorrect] = useState<boolean>(true)

  const handleSelectImage = (imageURI) => {
    userStore.updateNewImage(imageURI);
  }

  const handleResetAll = () => {
    refUser.current = {...userStore.user};  

    userStore.updateNewImage(refUser.current.imageURI || "");
  }

  const handleUpdateAll = () => {
    console.log(refUser.current);
    const validFields = isEmailCorrect && isRePassCorrect && isPassCorrect;
    const isTheSameUser = JSON.stringify(userStore.user) === JSON.stringify(refUser.current)
    const isImageTheSame = userStore.user.imageURI === userStore.newImageURI;

    if (validFields && (!isTheSameUser || !isImageTheSame)) {
      refUser.current.imageURI = String(userStore.newImageURI);

      const user = refUser.current;
      userStore.updateUser(user)

      axios.put(api_url("user"), {id: user._id, user: user}).then(res => {

        Alert.alert("Update", "Updated succesfully")
      }) .catch(error => {
        Alert.alert("Error", "Something went wrong...")
      })

    }
    else {
      Alert.alert("Hm...", "Nothing has changed")
    }
  }

  const validateEmail = () => {
    const text = refUser.current.email;

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text)) {
      refUser.current.email = text;
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
    const password = refUser.current.password;
    const validPass = password.length >= 6;

    setIsPassCorrect(validPass)
  }

  const validateRePass = () => {
    const password = refUser.current.password;
    const rePassword = refRePass.current;

    const validRePass = password === rePassword;
    const valid = validRePass;

    setIsRePassCorrect(valid)
  }

  const passFieldStyle = !isPassCorrect ? styles.error : null;
  const rePassFieldStyle = !isRePassCorrect ? styles.error : null;
  const emailFieldStyle = !isEmailCorrect ? styles.error : null;

  return (
    <View style={styles.content}>
      <Header3 text='Update user profile' style={{ marginVertical: 0 }}></Header3>
      <ImagePicker onSelect={handleSelectImage}>
        <View style={styles.textBox}>
          <Header3 style={styles.textBoxLabel} text={'New image'}></Header3>
          <Text style={styles.button}>select new image</Text>
        </View>
      </ImagePicker>

      <View style={styles.textBox}>
        <Header3 style={styles.textBoxLabel} text={'New name'}></Header3>
        <TextBoxLogin placeholder={user?.name || 'name'} containerStyles={styles.textBoxContainer} onChangeText={(text) => refUser.current.name = text}></TextBoxLogin>
      </View>
      <View style={[styles.textBox, emailFieldStyle]}>
        <Header3 style={styles.textBoxLabel} text={'New email'}></Header3>
        <TextBoxLogin onChangeText={(text) => { refUser.current.email = text }} onBlur={validateEmail}
          placeholder={user?.email || 'email'} containerStyles={styles.textBoxContainer}></TextBoxLogin>
      </View>
      
      {isEmailCorrect || <Text style={styles.errorText}>Wrong email</Text>}
      <View style={[styles.textBox, passFieldStyle]}>
        <Header3 style={styles.textBoxLabel} text={'New pass'}></Header3>
        <TextBoxPassword onChangeText={(text) => refUser.current.password = text} onBlur={validatePass} placeholder={'pass'} containerStyles={styles.textBoxContainer}></TextBoxPassword>
      </View>
      {isPassCorrect || <Text style={styles.errorText}>Password should be more than six letters</Text>}
      <View  style={[styles.textBox, rePassFieldStyle]}>
        <Header3 style={styles.textBoxLabel} text={'Repeat new pass'}></Header3>
        <TextBoxPassword onChangeText={(text) => refRePass.current = text} onBlur={validateRePass} placeholder={'repeat pass'} containerStyles={styles.textBoxContainer}></TextBoxPassword>
      </View>
      {isRePassCorrect || <Text style={styles.errorText}>Passwords should be the same</Text>}
      <View>
        <View style={[styles.textBox,{justifyContent: 'space-around'} ]}>
      <ButtonMain text="Confirm" onPress={handleUpdateAll} containerStyles={{ ...styles.spacer, ...styles.button }}></ButtonMain>
      <ButtonMain text="Reset all" onPress={handleResetAll} containerStyles={{  ...styles.button, backgroundColor: 'red' }}></ButtonMain>
        </View>
      </View>
    </View>
  )
}

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

export default UpdateUser