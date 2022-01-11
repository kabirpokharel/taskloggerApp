import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/theme/designSystem';

export default StyleSheet.create({
  greetingText: {
    marginVertical: 10,
    color: COLORS.light1,
  },
  buttonAdaptorWrapper: {
    marginVertical: 15,
  },
  linkWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  linkText: {
    color: COLORS.primary1,
    textDecorationLine: 'underline',
  },
});
