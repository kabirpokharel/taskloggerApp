import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES } from '../../assets/theme/designSystem';
import InputAdaptor from '../../components/common/Input/InputAdaptor';
import ButtonAdaptor from '../common/ButtonAdaptor/ButtonAdaptor';
import styles from './styles';

const loginForm = ({ navigation }) => {
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const formInputChange = (text, inputName) => {
    setForm({ ...form, [inputName]: text });
  };
  return (
    <View>
      <InputAdaptor
        label="Email"
        placeholder="Enter your email"
        value={form.email || ''}
        onChangeText={(text) => formInputChange(text, 'email')}
      />
      <InputAdaptor
        label="Password"
        placeholder="Enter Password"
        value={form.password || ''}
        secureTextEntry={!showPassword}
        icon={
          <FontAwesome
            onPress={() => setShowPassword(!showPassword)}
            name={showPassword ? 'eye-slash' : 'eye'}
            size={SIZES.baseSize * 18}
            color={COLORS.primary2}
          />
        }
        iconPosition="right"
        onChangeText={(text) => formInputChange(text, 'password')}
      />
      {/* onChangeText, iconPosition, icon, style, value, label, error, ...props */}
      <View style={styles.buttonAdaptorWrapper}>
        <ButtonAdaptor
          title="Login"
          type="primary"
          onPress={() => alert('Btn pressed')}
          buttonStyle={{}}
          textStyle={{}}
        />
      </View>
      <View style={styles.linkWrapper}>
        <TouchableOpacity onPress={() => alert('link to forgot password')}>
          <Text style={[styles.linkText, FONTS.body4]}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{form.email || ''}</Text>
      </View>
    </View>
  );
};

export default loginForm;
