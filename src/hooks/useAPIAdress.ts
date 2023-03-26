import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useAPIAdress(ip = process.env.API_IP, port = process.env.API_PORT || 3005, APIpath = "/api/") {
  ip = "192.168.183.173"
  const url = `http://${ip}:${port}${APIpath}`

  const fullUrl = (path: string = '') => {
    return url + path;
  }

  return fullUrl;
}
