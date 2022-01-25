import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RowElements from '../../../components/common/oldComponent/RowElements';
import roomStyle from './cleaningLogFunc';
import { SIZES, FONTS, COLORS } from '../../../assets/theme/designSystem';
import { roomClickHandler } from '../../../context/actions/tasklogAction';
import TitleWithDescription from '../../../components/common/oldComponent/TitleWithDescription';

const NUM_COL = SIZES.width > 480 ? 8 : 6;

const ElementChildren = ({ item, dynamicStyle }) => <Text style={dynamicStyle}>{item.roomId}</Text>;

const Room = ({ setOverlay, selectedBlockId, tasklogDispatch, taskLog }) => {
  const roomButtonStyle = (roomObj) => roomStyle(roomObj);

  const roomClicked = (roomObj, roomIndex) => {
    roomClickHandler(roomObj, roomIndex, selectedBlockId, 'daily')(tasklogDispatch);
  };
  const roomLongPress = (roomObj, roomIndex) => {
    roomClickHandler(roomObj, roomIndex, selectedBlockId, 'thorough')(tasklogDispatch);
  };

  return (
    <View style={{ flex: 1 }}>
      <TitleWithDescription
        title="Rooms"
        description="Select cleaned rooms"
        containerStyle={{
          marginTop: SIZES.baseSize * -8,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {!!selectedBlockId && (
          <TouchableOpacity
            onPress={() => {
              setOverlay(true);
            }}
            style={{
              zIndex: 4,
              height: SIZES.baseSize * 40,
              width: SIZES.baseSize * 40,
              alignItems: 'center',
            }}
          >
            <AntDesign name="ellipsis1" size={28} color={COLORS.primary1} />
          </TouchableOpacity>
        )}
      </TitleWithDescription>
      {selectedBlockId ? (
        <View
          style={{
            flex: 1,
            marginHorizontal: SIZES.baseSize * 20,
            paddingTop: SIZES.baseSize * 32 - SIZES.baseSize * 6,
          }}
        >
          <RowElements
            item={taskLog.find((block) => selectedBlockId === block.shortid).rooms}
            numColumns={NUM_COL}
            round
            ElementChildren={ElementChildren}
            onPress={roomClicked}
            onLongPress={roomLongPress}
            extraStyle={roomButtonStyle}
          />
          <View style={{ marginBottom: SIZES.baseSize * 50 }} />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={[FONTS.h2, { color: COLORS.light1 }]}>Select a block</Text>
        </View>
      )}
    </View>
  );
};

Room.propTypes = {
  setOverlay: PropTypes.func.isRequired,
  selectedBlockId: PropTypes.string.isRequired,
};

export default Room;
