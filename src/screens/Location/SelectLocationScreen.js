import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { GlobalContext } from '../../context/Provider';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axiosInstance from '../../helpers/axiosInstance';
import { TASK_LOG } from '../../constants/routeName';

const SelectLocation = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    //use id to get the location details
    //design error cases accordingly
    //for no error
    const result = await axiosInstance.get(`/location/viewAll`).catch((err) => {
      // console.log('this is an error ----> >>>>', err.response.data.message);
      console.log(
        'see the locaiton error --->',
        err.response.data?.message || 'Something went wrong, try again'
      );
    });
    const location = result?.data.locations.find((a) => a.shortid === data);
    // location = {  ************structure demo
    // "address": "7 martyl bank",
    //   "name": "Carmelite",
    //   "noOfBlocks": 3,
    //   "shortid": "Wg1CRPoQY",
    // };
    console.log('this is result-----------', location);
    const { shortid } = location;
    Alert.alert(
      'Location details',
      `Address: ${location.address}\nName: ${location.name}\nPlease proceed if above detials are correct`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('TaskLogNavigator', {
              screen: TASK_LOG,
              params: { locationID: shortid },
            }),
          // alert(
          //   'now lets proceed to task log page, firstly we pass the locaton Id as props and extract location details and create context hooks as well'
          // ),
        },
      ]
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
