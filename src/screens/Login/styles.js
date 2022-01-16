import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../assets/theme/designSystem';

export default StyleSheet.create({
  pageContainer: {
    // paddingTop: SIZES.baseSize * 60,
    justifyContent: 'center',
  },
  touchableStyle: {
    height: '100%',
    width: '100%',
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: SIZES.baseSize * 30,
    marginTop: SIZES.baseSize * -80,
  },
  loginFormWrapper: {
    marginHorizontal: SIZES.baseSize * 30,
  },
});
