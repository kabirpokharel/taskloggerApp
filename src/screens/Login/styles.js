import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../assets/theme/designSystem';

export default StyleSheet.create({
  pageContainer: {
    paddingTop: SIZES.baseSize * 60,
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
