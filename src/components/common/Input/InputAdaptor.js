import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS, FONTS } from '../../../assets/theme/designSystem';
import styles from './styles';

const InputAdaptor = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return COLORS.danger;
    }

    if (focused) {
      return COLORS.primary;
    } else {
      return COLORS.primary2;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={[FONTS.body4, styles.labelStyle]}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? 'center' : 'baseline' },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View>{icon && icon}</View>
        <TextInput
          style={[FONTS.body5, styles.textInput]}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.primary2}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

InputAdaptor.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  iconPosition: PropTypes.string,
  icon: PropTypes.element,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default InputAdaptor;
