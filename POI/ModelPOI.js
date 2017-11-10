import React from 'react'
import { Platform, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from './DevTheme'
import styles from './Styles/ComponentExamplesScreenStyles'

export default class ModelPOI {
  name: string;
  type: any;
  rating: number;
  coordinates: (number, number);
  description: string;
  hours: any;
  picture: Image;
  phone_number: any;
  address: any;
  keywords: string;

  constructor() {

  }
}
