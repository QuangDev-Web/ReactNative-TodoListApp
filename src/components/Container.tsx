import { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  children: ReactNode;
}
const Container = (props: Props) => {
  const { children } = props;
  return <ScrollView style={[globalStyles.container]}>{children}</ScrollView>;
};

export default Container;
