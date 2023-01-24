import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../Colors/Colors';

const LoginStyle = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.violet,
  },

  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    alignContent: 'center',
  },

  base: {
    backgroundColor: Colors.violet,
    flex: 1,
    alignContent: 'center',
    //alignItems: 'center'
  }
});

export default LoginStyle;