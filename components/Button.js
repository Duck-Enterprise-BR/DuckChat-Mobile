import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Colors from '../Colors/Colors';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },

  ButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.violet,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  
  ButtonText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  }
});

export default Button;