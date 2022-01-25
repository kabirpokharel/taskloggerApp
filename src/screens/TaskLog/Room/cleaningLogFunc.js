import { COLORS } from '../../../assets/theme/designSystem';

const roomButtonStyle = {
  defaultStyle: {
    backgroundColor: COLORS.white,
    color: COLORS.primary1,
    borderWidth: 1,
    borderColor: COLORS.light1,
  },
  thoroughStyle: {
    color: COLORS.white,
    borderWidth: 4,
    borderColor: '#05c46b',
    backgroundColor: '#05c46b',
    // borderColor: COLORS.primary,
    // backgroundColor: COLORS.primary,
  },
  dailyStyle: {
    color: COLORS.primary1,
    fontWeight: 'bold',
    borderWidth: 4,
    borderColor: '#05c46b',
    backgroundColor: COLORS.white,
  },
};

const roomStyle = (roomObj) => {
  const { defaultStyle, thoroughStyle, dailyStyle } = roomButtonStyle;
  const elementType = typeof roomObj;
  const selected = elementType === 'object' && elementType !== 'string';
  if (selected && roomObj?.cleaningType) {
    const buttonStyle = roomObj.cleaningType === 'daily' ? dailyStyle : thoroughStyle;
    return buttonStyle;
  }
  return defaultStyle;

  // if ('cleaningType' in roomObj) {
  //   const buttonStyle = roomObj.cleaningType === 'daily' ? dailyStyle : thoroughStyle;
  //   return buttonStyle;
  // }
  // return defaultStyle;
};

export default roomStyle;
