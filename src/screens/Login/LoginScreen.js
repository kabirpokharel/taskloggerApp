import { useContext } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../assets/theme/designSystem';
import PageTemplate from '../../components/common/PageTemplate/PageContainer';
import LoginForm from '../../components/forms/LoginForm';
import { GlobalContext } from '../../context/Provider';
import styles from './styles.js';

const LoginScreen = ({ navigation }) => {
  const {
    authContext: { authDispatch, authState },
  } = useContext(GlobalContext);
  const { isLoggedIn, data, error, loading } = authState;
  console.log('see this is error state from Login screen', error);
  return (
    <PageTemplate containerStyle={styles.pageContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.touchableStyle}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.logoWrapper}>
            <Image
              resizeMode="cover"
              style={{
                width: SIZES.baseSize * 160,
                height: undefined,
                aspectRatio: 1,
              }}
              source={require('../../assets/icons/icon.png')}
            />
          </View>
          <View style={styles.loginFormWrapper}>
            <LoginForm />
            {error && <Text>{error}</Text>}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </PageTemplate>
  );
};

export default LoginScreen;
