import { StyleSheet } from 'react-native';
import { SIZES } from '../../assets/theme/designSystem';

export default StyleSheet.create({
  titleText: {
    marginBottom: SIZES.baseSize * 15,
    fontSize: 25,
  },
  blockContainerWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
