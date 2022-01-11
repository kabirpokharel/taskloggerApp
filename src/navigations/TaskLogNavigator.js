import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LOCATION, SUMMARY, TASK_LOG } from '../constants/routeName';

const LogoTitle = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name="ios-menu" size={24} color="black" />
  </TouchableOpacity>
);
const Location = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate(TASK_LOG)} title="Go to TaskLog" />
    </View>
  );
};

const TaskLog = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen two</Text>
      <Button onPress={() => navigation.navigate(SUMMARY)} title="Go to summary" />
    </View>
  );
};

const Summary = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen three</Text>
      <Button onPress={() => navigation.navigate(LOCATION)} title="Go to Location" />
    </View>
  );
};

const TaskLogNavigator = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={LOCATION}>
      <Stack.Screen
        name={LOCATION}
        component={Location}
        options={{
          headerTitle: { LOCATION },
          headerLeft: () => <LogoTitle onPress={navigation.toggleDrawer} />,
        }}
      />
      <Stack.Screen name={TASK_LOG} component={TaskLog} />
      <Stack.Screen name={SUMMARY} component={Summary} />
    </Stack.Navigator>
  );
};

export default TaskLogNavigator;
