import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../assets/theme/designSystem';

const PageTemplate = ({ children, containerStyle }) => (
  <View style={[styles.containerWrapper, containerStyle]}>{children}</View>
);

export default PageTemplate;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
