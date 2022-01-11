import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOG_IN } from '../constants/routeName';
import Container from '../components/common/Container';
import { FONTS } from '../assets/theme/designSystem';
import LoginScreen from '../screens/Login/LoginScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LOG_IN}
        component={LoginScreen}
        options={{
          headerTitle: 'Login',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
