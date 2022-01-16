import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../../assets/theme/designSystem';

const PageTitle = ({ title }) => {
  return (
    <View
      style={{
        width: SIZES.baseSize * 190,
        paddingHorizontal: SIZES.baseSize * 10,
        paddingVertical: SIZES.baseSize * 5,
        marginBottom: SIZES.baseSize * 9,
        alignItems: 'center',
        backgroundColor: COLORS.light4,
        justifyContent: 'center',
        borderRadius: 25,
      }}
    >
      <Text style={[FONTS.body3, styles.titleTextStyle]}>{title}</Text>
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  titleContainer: {
    width: SIZES.baseSize * 190,
    paddingHorizontal: SIZES.baseSize * 10,
    paddingVertical: SIZES.baseSize * 5,
    marginBottom: SIZES.baseSize * 9,
    alignItems: 'center',
    backgroundColor: COLORS.light4,
    justifyContent: 'center',
    borderRadius: 25,
  },
  titleTextStyle: {
    color: COLORS.primary2,
    letterSpacing: 0.8,
  },
});
