import { Feather } from '@expo/vector-icons';
import React, {  useState } from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TextBox, { ITextBox } from './TextBox';
import TextBoxLogin from './TextBoxLogin';


const TextBoxPassword = (props: ITextBox) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];

  const [isSecured, setIsSecured] = useState<boolean>(true);

  const handleVisible = () => {
    setIsSecured((secured) => !secured)
  }

  const eyeIcon = !isSecured ? "eye" : "eye-off";

  return (
      <TextBoxLogin secureTextEntry= {isSecured} onIconPress={handleVisible} icon={<Feather name={eyeIcon} size={24} color={theme.main}/> } {...props}></TextBoxLogin>
  )
}

export default TextBoxPassword