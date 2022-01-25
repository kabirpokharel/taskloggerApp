// *******example code to be implement on task logg page
import { useEffect, useRef, useState, useContext } from 'react';
import {
  Dimensions,
  FlatList,
  LayoutAnimation,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import { GlobalContext } from '../../context/Provider';
import { MaterialIcons } from '@expo/vector-icons';
import { initilizeLocationAttribute } from '../../context/actions/tasklogAction';

import Block from './Block';
import Room from './Room';
import { SIZES, FONTS, COLORS } from '../../assets/theme/designSystem';
import FooterButton from '../../components/common/oldComponent/FooterButton';
import PageTemplate from '../../components/common/oldComponent/PageTemplate';
import CardComponent from '../../components/common/oldComponent/CardComponent';
import ExtraAreas from './ExtraAreas';
import TitleWithDescription from '../../components/common/oldComponent/TitleWithDescription';
import { SUMMARY } from '../../constants/routeName';

const TaskLogScreen = ({ navigation, route }) => {
  const [selectedBlockId, setSelectedBlockId] = useState('');
  const [overlay, setOverlay] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    tasklogContext: { tasklogState, tasklogDispatch },
  } = useContext(GlobalContext);

  const {
    taskLog,
    loading,
    cleaningTypeCount: { daily, thorough },
  } = tasklogState;
  // const { daily, thorough } = cleaningTypeCount;
  const cleanedRoomCount = daily + thorough;
  const { locationID } = route.params;
  console.log('see this is locaiton ID', locationID);
  useEffect(() => {
    // console.log('see this is tasklogDispatch', tasklogDispatch);
    // tasklogDispatch({ type: 'LOCATION_DETAIL_INITIALIZING' });
    initilizeLocationAttribute(locationID)(tasklogDispatch);
  }, []);

  const navigationToSummaryPage = () => {
    if (cleanedRoomCount) {
      navigation.navigate(SUMMARY);
    } else {
      setShowModal(true);
    }
  };

  return (
    <PageTemplate>
      <TitleWithDescription title="Block" description="Select block to access rooms" />
      {showModal && !cleanedRoomCount && (
        <Modal transparent isVisible={cleanedRoomCount > 0}>
          <View
            style={{
              flex: 1,
              // alignItems: 'center',
              // justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={styles.popupModalWrapper}>
                <View style={{ marginBottom: 20 }}>
                  <MaterialIcons name="info" size={80} color="#4285f4" />
                </View>
                <Text style={[FONTS.body2, { color: COLORS.primary, marginBottom: 5 }]}>
                  Attention!!
                </Text>
                <Text
                  style={[
                    FONTS.body5,
                    { color: COLORS.primary1, fontSize: 15, textAlign: 'center' },
                  ]}
                >
                  No room selected, log your task before proceeding
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
      {overlay && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            opacity: 0.4,
            zIndex: 1,
          }}
          onPress={() => setOverlay(false)}
        >
          {/* <TouchableOpacity style={{ backgroundColor: 'green', height: '100%', width: '100%' }} onPress={() => setOverlay(false)} /> */}
        </TouchableOpacity>
      )}
      {loading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: SIZES.baseSize * 89,
          }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={{ marginHorizontal: 20 }}>
          <Block
            {...{
              taskLog,
              selectedBlockId,
              setSelectedBlockId,
              tasklogDispatch,
            }}
          />
        </View>
      )}
      {overlay && (
        <View
          style={{
            zIndex: 2,
            position: 'absolute',
            top: SIZES.baseSize * 190,
            right: 0,
          }}
        >
          <CardComponent cardStyle={{ borderRadius: 7 }}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 5,
                justifyContent: 'center',
              }}
              onPress={() => {
                console.log('currentBlockid from Home screen', currentBlockId);
                // setOverlay(false);
                // dispatch(resetCurrentBlock(currentBlockId));
              }}
            >
              <Text
                style={[
                  FONTS.body4,
                  // {
                  //   color: checkBlockStatus(currentBlockId, taskLog).isEmpty
                  //     ? COLORS.light1
                  //     : COLORS.primary,
                  // },
                ]}
              >
                Reset current Block
              </Text>
            </TouchableOpacity>
            <View
              style={{
                marginHorizontal: SIZES.baseSize * 5,
                borderBottomColor: COLORS.light1,
                borderBottomWidth: 1,
              }}
            />
            <TouchableOpacity
              style={{
                paddingHorizontal: SIZES.baseSize * 8,
                paddingVertical: SIZES.baseSize * 5,
                justifyContent: 'center',
              }}
              onPress={() => {
                console.log('currentBlockid from Home screen', currentBlockId);
                setOverlay(false);
                // dispatch(resetCurrentBlock(currentBlockId));
              }}
            >
              <Text
                style={[
                  FONTS.body4,
                  // {
                  //   color: checkBlockStatus(currentBlockId, taskLog).isEmpty
                  //     ? COLORS.light1
                  //     : COLORS.primary,
                  // },
                ]}
              >
                Reset all
              </Text>
            </TouchableOpacity>
          </CardComponent>
        </View>
      )}
      <Room
        {...{
          // overlay,
          setOverlay,
          selectedBlockId,
          tasklogDispatch,
          taskLog,
        }}
      />
      <ExtraAreas {...{ selectedBlockId, taskLog, tasklogDispatch }} />
      <FooterButton
        onPress={navigationToSummaryPage}
        containerStyle
        textStyle
        btnText="Continue to summary"
      />
      {/* <SafeAreaView /> */}
    </PageTemplate>
  );
};

export default TaskLogScreen;
const styles = StyleSheet.create({
  popupModalWrapper: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 20,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 30,
    borderRadius: 25,
  },
});
