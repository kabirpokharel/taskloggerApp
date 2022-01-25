import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Platform, Modal, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CardComponent from '../../components/common/oldComponent/CardComponent';
import FooterButton from '../../components/common/oldComponent/FooterButton';
import PageTemplate from '../../components/common/oldComponent/PageTemplate';
import CustomButton from '../../components/common/oldComponent/CustomButton';
import TitleWithDescription from '../../components/common/oldComponent/TitleWithDescription';
import { GlobalContext } from '../../context/Provider';
import { dataFormatter, submitTaskLog, processBlockRoomStatus } from './summaryScreenFunc';
import { IndividualBlockDetails, SummaryElement } from './SummaryComponent';
import { COLORS, FONTS, SIZES } from '../../assets/theme/designSystem';
import { HOME } from '../../constants/routeName';

const isPlatformIos = Platform.OS === 'ios';

const SummaryScreen = (props) => {
  const { navigation } = props;
  const [viewMore, setViewMore] = useState(false);
  const [blockDetails, setblockDetails] = useState({});
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  const [popup, setPopup] = useState(false);
  // const cleaningDetail = useSelector((state) => state.cleaning);

  const {
    authContext: { authDispatch, authState },
    tasklogContext: { tasklogState, tasklogDispatch },
  } = useContext(GlobalContext);

  // const authenticationDetail = useSelector((state) => state.auth);

  const { taskLog, cleaningTypeCount, location, startAt } = tasklogState;
  console.log('see this is cleaningDetail from redux -- -- > ', location.shortid);
  const {
    data: { shortid },
  } = authState;
  return (
    <PageTemplate>
      <TitleWithDescription title="Summary" description="check your log before saving your log" />
      {(popup || loading) && (
        <Modal transparent isVisible={popup}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#00ff00" />
            ) : (
              <View
                // onPress={() => setPopup(false)}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <View style={styles.popupModalWrapper}>
                  <Text style={[FONTS.body2, { color: COLORS.primary, marginBottom: 5 }]}>
                    {error ? 'Error' : 'Success!!'}
                  </Text>
                  <Text
                    style={[
                      FONTS.body5,
                      { color: COLORS.primary1, fontSize: 15, textAlign: 'center' },
                    ]}
                  >
                    {error
                      ? 'Error encountered try again'
                      : 'Tasklog recorded, press OK to return to home menu'}
                  </Text>
                  <CustomButton
                    btnStyle={{
                      marginTop: 20,
                      width: 150,
                      borderRadius: 20,
                      backgroundColor: COLORS.primary,
                    }}
                    label="Ok"
                    onPress={() => {
                      setPopup(false);
                      navigation.navigate(HOME);
                    }}
                  />
                </View>
              </View>
            )}
          </View>
        </Modal>
      )}
      <View
        style={{
          flex: 1,
          paddingBottom: isPlatformIos ? SIZES.baseSize * 70 : SIZES.baseSize * 55,
        }}
      >
        <ScrollView>
          <CardComponent cardStyle={styles.cardStyle}>
            <View style={styles.summaryCardHeader}>
              <Text style={[FONTS.body3, { color: COLORS.primary }]}>Current Shift Details</Text>
              <TouchableOpacity
                onPress={() => {
                  dataFormatter(taskLog, setblockDetails);
                  setViewMore((prevState) => !prevState);
                }}
                style={styles.summaryViewToggleBtn}
              >
                <Text style={[FONTS.body5, { color: COLORS.primary }]}>
                  {viewMore ? 'View Less' : 'View More'}
                </Text>
              </TouchableOpacity>
            </View>
            <SummaryElement item="Daily Cleaning" measure={cleaningTypeCount.daily} />
            <SummaryElement item="Thorough Cleaning" measure={cleaningTypeCount.thorough} />
            <SummaryElement
              item="Total rooms attended"
              measure={`${cleaningTypeCount.daily + cleaningTypeCount.thorough}`}
            />
            {viewMore &&
              blockDetails.blockNames.map((blockName) => (
                <IndividualBlockDetails
                  key={blockName}
                  blockName={blockName}
                  daily={processBlockRoomStatus(blockName, blockDetails.dailyCleaned)}
                  thorough={processBlockRoomStatus(blockName, blockDetails.thoroughCleaned)}
                  unattended={processBlockRoomStatus(blockName, blockDetails.unAttended)}
                />
              ))}
          </CardComponent>
        </ScrollView>
      </View>
      <FooterButton
        onPress={() =>
          submitTaskLog(setLoding, setPopup, setError, taskLog, shortid, location, startAt)
        }
        btnText="Submit"
      />
    </PageTemplate>
  );
};

SummaryScreen.propTypes = {
  // feedBird: PropTypes.func.isRequired,
};

export default SummaryScreen;

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
  cardStyle: {
    paddingHorizontal: 10,
    marginTop: 20,
    width: SIZES.width - 20,
    borderRadius: SIZES.baseSize * 8,
  },
  summaryCardHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryViewToggleBtn: {
    backgroundColor: '#d9ebe9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.baseSize * 32,
  },
});
