import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  const navigate = useNavigation();
  const handleGoToRegister = () => {
    navigate.navigate("Register");
  } 

  return (
    <View >
      <Text>HomeScreen</Text>
      <Button title="You are new here?" onPress={handleGoToRegister}></Button>
    </View>
  );
}

const styles = StyleSheet.create({

});
