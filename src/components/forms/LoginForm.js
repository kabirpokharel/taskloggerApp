import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axiosInstance from '../../helpers/axiosInstance';
import { COLORS, FONTS, SIZES } from '../../assets/theme/designSystem';
import InputAdaptor from '../../components/common/Input/InputAdaptor';
import ButtonAdaptor from '../common/ButtonAdaptor/ButtonAdaptor';
import { LOGIN } from '../../constants/routeName';

import styles from './styles';
import { GlobalContext } from '../../context/Provider';
import loginUserAction from '../../context/actions/loginUserAction';
// import axios from 'axios';

const loginForm = () => {
  const [form, setForm] = useState({ email: 'kabirpokharel12@gmail.com', password: '123admin' });
  const [formError, setFormError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const formInputChange = (text, inputName) => {
    setForm({ ...form, [inputName]: text });
  };

  const {
    authContext: { authDispatch, authState },
  } = useContext(GlobalContext);
  const { isLoggedIn, data, error, loading } = authState;

  const onSubmit = async () => {
    if (form.email && form.password) {
      loginUserAction(form)(authDispatch);
    }
  };
  return (
    <View>
      <InputAdaptor
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        // onBlur={()=>{}}
        // onFocus={()=>{}}
        value={form.email || ''}
        onChangeText={(text) => formInputChange(text, 'email')}
      />
      <InputAdaptor
        label="Password"
        placeholder="Enter Password"
        // onBlur={()=>{}}
        // onFocus={()=>{}}
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
      <View style={styles.buttonAdaptorWrapper}>
        <ButtonAdaptor
          title="Login"
          type="primary"
          loading={loading}
          // disabled
          onPress={onSubmit}
          buttonStyle={{}}
          textStyle={{}}
        />
      </View>
      <View style={styles.linkWrapper}>
        <TouchableOpacity onPress={() => alert('Hey')}>
          <Text style={[styles.linkText, FONTS.body4]}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default loginForm;
