import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../Colors/Colors';

const RegisterStyle = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.violet,
  },

  register: {
    backgroundColor: Colors.background,
    alignItems: 'center',
  },

  base: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  registerButton:{
    backgroundColor: Colors.background,
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'column',
    marginTop: '52%'
  }
});

export default RegisterStyle;