import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../Colors/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const RegisterStyle = StyleSheet.create({
  button: {
    borderWidth: 1, 
    borderColor: Colors.violet,
  },

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

  registerButton: {
    //marginBottom: '20%',
    //marginTop: '10%',
    width: '100%',
    //backgroundColor: Colors.white,
    flexDirection: 'column-reverse',
    //position: 'absolute',
    //bottom: 0,
    //alignItems: 'center',
    //alignSelf: 'center',
    //paddingVertical: '5%',
    backgroundColor: Colors.white,
    marginTop: '5%'
  },

  screenName: {
    color: Colors.orange2,
    fontWeight: 'bold',
    fontSize: RFValue(35)
  },

  back: {
    height: '4%',
    alignSelf: 'flex-start'
  }
});

export default RegisterStyle;