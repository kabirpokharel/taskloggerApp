import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOG_IN } from '../constants/routeName';
import Container from '../components/common/Container';
import { FONTS } from '../assets/theme/designSystem';

const Login = () => {
  return (
    <Container>
      <View style={{ backgroundColor: 'white', margin: 10, padding: 35 }}>
        <Text style={FONTS.body3}>Open up App.js to start working on your app!</Text>
      </View>
      <View style={{ backgroundColor: 'pink', margin: 10, padding: 35 }}>
        <Text style={FONTS.h3}>Apple is a fruit</Text>
      </View>
      <View style={{ backgroundColor: 'pink', margin: 10, padding: 35 }}>
        <Text style={{ fontFamily: 'RobotoRegular' }}>Apple is a fruit n hhh gg k K</Text>
      </View>
      <View style={{ backgroundColor: 'pink', margin: 10, padding: 35 }}>
        <Text>4</Text>
      </View>
      <View style={{ backgroundColor: 'pink', margin: 10, padding: 35 }}>
        <Text>5</Text>
      </View>
      <View style={{ backgroundColor: 'pink', margin: 10, padding: 35 }}>
        <Text>6</Text>
      </View>
      <View style={{ backgroundColor: 'pink', margin: 10, padding: 35 }}>
        <Text>7</Text>
      </View>
      <View style={{ backgroundColor: 'pink', margin: 10, padding: 35 }}>
        <Text>8</Text>
      </View>
    </Container>
  );
};

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LOG_IN}
        component={Login}
        options={{
          headerTitle: 'Log In',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
