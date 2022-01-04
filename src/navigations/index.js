import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { GlobalContext } from '../context/Provider';
import { COLORS, SIZES, FONTS } from '../assets/theme/designSystem';

const AppNavContainer = () => {
  const isLoggedIn = true;
  const { authContext } = useContext(GlobalContext);
  const { authDispatch, authState } = authContext;
  console.log('authstate >>>', authState);

  const [fontsLoaded] = useFonts({
    // RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    // RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    // RobotoRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    RobotoRegular: require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
    RobotoBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {authState.isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;