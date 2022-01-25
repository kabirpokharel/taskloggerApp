import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HOME, LOCATION } from '../constants/routeName';
import { TaskLogNavigator } from './TaskLogNavigator';
import { HomeScreen, SelectLocation } from '../screens';
import { COLORS } from '../assets/theme/designSystem';
import PageTitle from '../components/common/PageTemplate/PageTitle';

const LogoTitle = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name="ios-menu" size={24} color="black" />
  </TouchableOpacity>
);
// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         // onPress={() => navigate.navigate('HomeTwo')}
//         // onPress={() => navigation.navigate('TaskLogNavigator', { screen: LOCATION })}
//         onPress={() => navigation.navigate('TaskLogNavigator')}
//         title="Go to location screen"
//       />
//     </View>
//   );
// };

const HomeNavigator = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          headerTitle: { HOME },
          headerLeft: () => <LogoTitle onPress={navigation.toggleDrawer} />,
        }}
      />
      <Stack.Screen
        name={LOCATION}
        component={SelectLocation}
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          screenOptions: { headerTitleAlign: 'center' },
          headerTitle: () => <PageTitle title={'Location'} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
