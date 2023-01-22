import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../colors/Colors';

const LoginStyle = StyleSheet.create({
  input: {
    height: 50,
    width: 300,
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.violet,
    borderRadius: 5,
    padding: 10,
  },

  button: {
    borderWidth: 1,
    borderColor: Colors.violet,
    height: 200
  },

  textRegister: {
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform:'uppercase',
    fontSize: 13,
    color: Colors.violet2,
    marginTop: 50
  },

  textInfo: {
    fontWeight: 'bold',
    alignSelf: 'baseline',
    textTransform: 'uppercase',
    fontSize: 13,
    color: Colors.violet2,
    marginHorizontal: 10,
    marginTop: 10
  },

  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },

  base: {
    backgroundColor: Colors.white,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default LoginStyle;