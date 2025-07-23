import { Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';
import { fontsFamily } from '../constants/fontsFamily';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
}
const TextComponent = (props: Props) => {
  const { text, size, font, color, flex } = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          flex: flex ?? 1,
          fontFamily: font ?? fontsFamily.regular,
          fontSize: size ?? 14,
          color: color ?? colors.desc,
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
