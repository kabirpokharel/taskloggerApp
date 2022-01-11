import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';
import { COLORS } from '../../../assets/theme/designSystem';

export default StyleSheet.create({
  touchableStyle: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.primary,
  },

  loaderSection: {
    flexDirection: 'row',
  },

  bthText: {
    color: COLORS.white,
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
