import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../../../colors/index';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const UserInformationStyle = StyleSheet.create({
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
    alignItems: 'center'
  },

  loginButton: {
    //marginBottom: '20%',
    //marginTop: '10%',
    width: '100%',
    //backgroundColor: Colors.white,
    flexDirection: 'column-reverse',
    //position: 'absolute',
    //bottom: 0,
    //alignItems: 'center',
    //alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: Colors.white
  },

  screenName: {
    color: Colors.orange2,
    fontWeight: 'bold',
    fontSize: RFValue(35)
  }
});

export default UserInformationStyle;