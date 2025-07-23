import { fontsFamily } from '../constants/fontsFamily';
import TextComponent from './TextComponent';

interface Props {
  text: string;
  font?: string;
  size?: number;
  color?: string;
}
const TitleComponent = (props: Props) => {
  const { text, font, size, color } = props;
  return (
    <TextComponent
      text={text}
      font={font ?? fontsFamily.semiBold}
      size={size ?? 20}
      color={color}
    />
  );
};

export default TitleComponent;
