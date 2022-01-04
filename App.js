import { SafeAreaView, StyleSheet } from 'react-native';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';

const App = () => {
  return (
    <GlobalProvider>
      {/* <SafeAreaView style={styles.container}> */}
      <AppNavContainer />
      {/* </SafeAreaView> */}
    </GlobalProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
