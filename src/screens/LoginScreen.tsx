import { useNavigation } from '@react-navigation/native';
import { Button, Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function LoginScreen() {
  const navigator = useNavigation();

  const handleRegister  = () => {
    navigator.navigate("Register")
  } 
  return (

    <View  style={styles.container}>
      <Image style={styles.image}></Image>
      <Button title="click me" onPress={handleRegister}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main.black
  }, 
  image: {
    flex: 1,
    alt: "Logo",
    width: "100%",
  }
});
