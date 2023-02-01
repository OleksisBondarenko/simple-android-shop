import React, { useState, useEffect, ReactNode } from 'react';
import { Button, Image, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePickerExpo from 'expo-image-picker';  // not react-image-picker

interface IImagepicker {
  // image: string,
  children: any,
  onSelect: Function
}

export default function ImagePicker({onSelect, children }: IImagepicker) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePickerExpo.launchImageLibraryAsync({
      mediaTypes: ImagePickerExpo.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    const imageURI = result.uri;
    
    if (!result.canceled && typeof onSelect == 'function') {
      onSelect(imageURI);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} >
      {children}
    </TouchableOpacity>
  );
}