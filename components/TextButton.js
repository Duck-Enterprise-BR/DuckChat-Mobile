import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import TextButtonStyle from '../style/TextButtonStyle';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const TextButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={TextButtonStyle.ButtonContainer}>
        <Text style={TextButtonStyle.ButtonText}>{title}</Text>
    </TouchableOpacity>
);

export default TextButton;