import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';
import { COLORS, SIZES } from '../../../assets/theme/designSystem';

export default StyleSheet.create({
  labelStyle: {
    color: COLORS.primary1,
  },
  wrapper: {
    height: SIZES.baseSize * 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: SIZES.baseSize * 5,
    // marginTop: SIZES.baseSize * 5,
  },

  inputContainer: {
    paddingBottom: SIZES.baseSize * 16,
  },

  textInput: {
    flex: 1,
    width: '100%',
    color: COLORS.primary1,
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
