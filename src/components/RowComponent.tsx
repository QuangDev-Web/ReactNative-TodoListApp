import { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  onPress?: () => void;
}

const RowComponent = (props: Props) => {
  const { children, styles, justify, onPress } = props;
  const localStyle = [
    globalStyles.row,
    { justifyContent: justify ?? 'center' },
    styles,
  ];
  return onPress ? (
    <TouchableOpacity style={localStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};

export default RowComponent;
