import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOG_IN } from '../constants/routeName';
import Container from '../components/common/Container';
import { COLORS, FONTS } from '../assets/theme/designSystem';
import LoginScreen from '../screens/Login/LoginScreen';
import PageTitle from '../components/common/PageTemplate/PageTitle';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={LOG_IN}
        component={LoginScreen}
        // screenOptions={{
        //   headerShown: false,
        // }}
        // options={{
        //   headerStyle: {
        //     backgroundColor: COLORS.white,
        //   },
        //   screenOptions: { headerTitleAlign: 'center' },
        //   headerTitle: () => <PageTitle title={'Login'} />,
        // }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
