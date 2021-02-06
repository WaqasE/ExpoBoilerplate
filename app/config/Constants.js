import React from 'react';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
const { height, width } = Dimensions.get('screen')
const { statusBarHeight, platform } = Constants;
export default { height, width, statusBarHeight, platform };