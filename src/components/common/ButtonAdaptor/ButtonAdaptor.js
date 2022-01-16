import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS, FONTS } from '../../../assets/theme/designSystem';

import styles from './styles';

const ButtonAdaptor = ({ title, type, onPress, buttonStyle, textStyle, loading, disabled }) => {
  const showOverlay = !!loading || !!disabled;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.touchableStyle, buttonStyle]}
    >
      <View style={{ flex: 1, width: '100%', height: '100%' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {title && <Text style={[styles.bthText, FONTS.h3, textStyle]}>{title}</Text>}
        </View>
        {showOverlay && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              opacity: 0.6,
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {loading && <ActivityIndicator size="large" color={COLORS.primary} />}
            </View>
          </View>
        )}
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
