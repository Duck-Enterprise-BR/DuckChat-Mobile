import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../Colors/Colors';

const LoginStyle = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.violet,
  },

  login: {
    alignItems: 'center',
    backgroundColor: Colors.white,
  },

  base: {
    backgroundColor: Colors.white,
    flex: 1,
  },

  loginButton:{
    backgroundColor: Colors.white,
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'column',
    marginTop: '100%'
  }
});

export default LoginStyle;