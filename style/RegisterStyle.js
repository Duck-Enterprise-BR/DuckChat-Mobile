import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Colors from "../Colors/Colors";

const RegisterStyle = StyleSheet.create({
  input: {
    height: 50,
    width: 300,
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.violet,
    borderRadius: 5,
    padding: 10,
  },

  button: {
    borderWidth: 1,
    borderColor: Colors.violet,
  },

  textLogin: {
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontSize: 22,
    color: Colors.violet
  },

  textRegister: {
    fontWeight: "bold",
    alignSelf: 'center',
    textTransform: "uppercase",
    fontSize: 13,
    color: Colors.violet2
  },

  register: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.pink
  },

  base: {
    backgroundColor: Colors.black,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default RegisterStyle;