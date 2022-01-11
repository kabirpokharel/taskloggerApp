import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  Image,
} from 'react-native';
import { COLORS, SIZES } from '../../assets/theme/designSystem';
import LoginForm from '../../components/forms/LoginForm';
import styles from './styles.js';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.touchableStyle}>
        <KeyboardAvoidingView>
          <View style={styles.logoWrapper}>
            <Image
              resizeMode="cover"
              style={{
                width: SIZES.baseSize * 160,
                height: undefined,
                aspectRatio: 1,
                marginBottom: SIZES.baseSize * 30,
              }}
              source={require('../../assets/icons/icon.png')}
            />
          </View>
          <View style={styles.loginFormWrapper}>
            <LoginForm {...{ navigation }} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;
