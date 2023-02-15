import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ButtonStyle from '../styles/components/ButtonStyle';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={ButtonStyle.base}>
    <Text style={ButtonStyle.ButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;