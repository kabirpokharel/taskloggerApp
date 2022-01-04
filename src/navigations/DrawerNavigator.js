import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
// import AuthNavigator from './AuthNavigator';
import TaskLogNavigator from './TaskLogNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="TaskLogNavigator" component={TaskLogNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
