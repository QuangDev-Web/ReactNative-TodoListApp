import { Platform, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { fontsFamily } from '../constants/fontsFamily';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 42 : 32,
  },
  section: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fontsFamily.regular,
    color: colors.text,
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: colors.gray,
    borderRadius: 12,
    paddingHorizontal: Platform.OS === 'ios' ? 12 : 10,
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
  },
});
