import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../assets/theme/designSystem';

export const Title = ({ title, titleStyle }) => (
  <Text style={[styles.titleText, FONTS.body2, titleStyle]}>{title}</Text>
);
export const TitleDescription = ({ description, descriptionStyle }) => (
  <Text style={[styles.descriptionText, FONTS.body5, descriptionStyle]}>{description}</Text>
);

const TitleWithDescriptionComponent = ({
  containerStyle,
  title,
  description,
  children,
  titleStyle,
  descriptionStyle,
}) => (
  <View style={[styles.titleContainer, containerStyle]}>
    <View>
      <Title {...{ title, titleStyle }} />
      <TitleDescription {...{ description, descriptionStyle }} />
    </View>
    {children}
  </View>
);

export default TitleWithDescriptionComponent;

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: SIZES.baseSize * 10,
    paddingTop: SIZES.baseSize * 30,
  },
  titleText: {
    color: COLORS.primary1,
  },
  descriptionText: {
    color: COLORS.primary2,
  },
});
