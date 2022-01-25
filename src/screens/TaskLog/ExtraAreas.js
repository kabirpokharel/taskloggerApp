import { StyleSheet, View, FlatList } from 'react-native';
import { FONTS, COLORS, SIZES } from '../../assets/theme/designSystem';
import TagComponent from '../../components/common/oldComponent/TagComponent';
import TitleWithDescription from '../../components/common/oldComponent/TitleWithDescription';
import { extrasCleaned } from '../../context/actions/tasklogAction';

const tagStyle = (elem, type) => {
  if ('cleaningType' in elem) {
    if (type === 'text') {
      return { color: COLORS.white };
    }
    if (type === 'tag') {
      return { backgroundColor: '#05c46b' };
    }
  }
  return {};
};

const ExtraAreas = ({ selectedBlockId, taskLog, tasklogDispatch }) => {
  let currentBlock = {};
  if (selectedBlockId) {
    currentBlock = taskLog.find((block) => {
      console.log('see short id and current block id', block.shortid, selectedBlockId);
      return block.shortid === selectedBlockId;
    });
  }
  return (
    <View
      style={{
        height: SIZES.baseSize * 260,
      }}
    >
      <TitleWithDescription
        title="Extras"
        description="Select areas you attended"
        containerStyle={{
          marginTop: SIZES.baseSize * -8,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      />
      {!!selectedBlockId && (
        <View style={styles.extrasContainer}>
          <FlatList
            data={currentBlock.extras}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TagComponent
                Key={item.type}
                onPress={() => {
                  extrasCleaned(index, item, selectedBlockId)(tasklogDispatch);
                }}
                tagText={item.type}
                textStyle={tagStyle(item, 'text')}
                containerStyle={tagStyle(item, 'tag')}
              />
            )}
            keyExtractor={(item) => item.type}
          />
        </View>
      )}
    </View>
  );
};

export default ExtraAreas;

const styles = StyleSheet.create({
  extrasContainer: {
    marginTop: SIZES.baseSize * 15,
    // borderColor: COLORS.light4,
    // borderWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: SIZES.baseSize * 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
});
