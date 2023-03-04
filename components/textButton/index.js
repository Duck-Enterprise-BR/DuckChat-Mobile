import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Style from './style/style';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const TextButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={Style.ButtonContainer}>
        <Text style={Style.ButtonText}>{title}</Text>
    </TouchableOpacity>
);

export default TextButton;