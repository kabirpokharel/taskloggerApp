import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  Image,
} from 'react-native';
import { COLORS, SIZES } from '../../assets/theme/designSystem';
import PageTemplate from '../../components/common/PageTemplate/PageContainer';
import LoginForm from '../../components/forms/LoginForm';
import styles from './styles.js';

const LoginScreen = ({ navigation }) => {
  return (
    <PageTemplate containerStyle={styles.pageContainer}>
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
            <LoginForm />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </PageTemplate>
  );
};

export default LoginScreen;
