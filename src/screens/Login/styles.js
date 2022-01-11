import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../assets/theme/designSystem';

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: SIZES.baseSize * 60,
    backgroundColor: COLORS.white,
  },
  touchableStyle: {
    height: '100%',
    width: '100%',
  },
  logoWrapper: {
    alignItems: 'center',
  },
  loginFormWrapper: {
    marginHorizontal: SIZES.baseSize * 30,
  },
});
