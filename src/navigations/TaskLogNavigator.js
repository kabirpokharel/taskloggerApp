import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SUMMARY, TASK_LOG } from '../constants/routeName';
import { TaskLogScreen } from '../screens';
import SummaryScreen from '../screens/SummaryScreen/SummaryScreen';

const LogoTitle = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name="ios-menu" size={24} color="black" />
  </TouchableOpacity>
);

const TaskLog = ({ navigation }) => {
  console.log('hey from tasklog!!!!!!!!');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Task log screen</Text>
      <Button onPress={() => navigation.navigate(SUMMARY)} title="Go to summary" />
    </View>
  );
};

// const Summary = ({ navigation }) => {
//   console.log('hey from summary!!!!!!!!');
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen three</Text>
//       <Button onPress={() => navigation.navigate(TASK_LOG)} title="Go to Location" />
//     </View>
//   );
// };

const TaskLogNavigator = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={TASK_LOG}>
      <Stack.Screen
        name={TASK_LOG}
        component={TaskLogScreen}
        options={{
          headerTitle: { TASK_LOG },
          // headerLeft: () => <LogoTitle onPress={navigation.toggleDrawer} />,
        }}
      />
      <Stack.Screen name={SUMMARY} component={SummaryScreen} />
    </Stack.Navigator>
  );
};

export default TaskLogNavigator;
