import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../style';

export default function styleConstructor(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return  StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    dayNum: {
      fontSize: 28,
      fontFamily: 'raleway-regular',
      color: appStyle.agendaDayNumColor
    },
    dayText: {
      fontSize: 12,
      fontFamily: 'raleway-bold',
      color: 'rgba(255,255,255,0.6)',
      marginTop: -5,
    },
    day: {
      width: 63,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 32
    },
    today: {
      color: appStyle.agendaTodayColor,
      fontFamily: "raleway-regular",
      fontSize: 34,
    }
  });
}
