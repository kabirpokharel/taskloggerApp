import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS, FONTS } from '../../../assets/theme/designSystem';

import styles from './styles';

const ButtonAdaptor = ({ title, type, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      disabled={type === 'disabled'}
      onPress={onPress}
      style={[styles.touchableStyle, buttonStyle]}
    >
      <View>
        {type === 'loading' && <ActivityIndicator color={'red'} />}
        {title && <Text style={[styles.bthText, FONTS.h3, textStyle]}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

ButtonAdaptor.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default ButtonAdaptor;
