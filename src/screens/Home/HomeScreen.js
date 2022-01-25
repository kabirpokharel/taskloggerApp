import { StyleSheet, Text, View } from 'react-native';
import { LOCATION } from '../../constants/routeName';
import ButtonAdaptor from '../../components/common/ButtonAdaptor/ButtonAdaptor';
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ButtonAdaptor
        title="Select location"
        type="primary"
        // loading={loading}
        // disabled
        onPress={() => navigation.navigate(LOCATION)}
        buttonStyle={{}}
        textStyle={{}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
