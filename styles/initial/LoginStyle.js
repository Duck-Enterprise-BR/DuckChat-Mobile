import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../../colors/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const LoginStyle = StyleSheet.create({
  login: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    width: '90%',
    height: '100%',
    //arginTop: '20%',
    justifyContent: 'center',
  },

  base: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
  },

  loginButton: {
    width: '100%',
    flexDirection: 'column-reverse',
    marginTop: '5%',
    backgroundColor: Colors.white
  },

  screenName: {
    color: Colors.orange2,
    fontWeight: 'bold',
    fontSize: RFValue(35)
  }
});

export default LoginStyle;