import { Text, View } from 'react-native';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import Section from '../components/Section';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import { globalStyles } from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  console.log('home');
  return (
    <Container>
      <Section>
        <RowComponent justify="space-between">
          <TextComponent text="icon" flex={0} />
          <TextComponent text="icon" flex={0} />
        </RowComponent>
      </Section>
      <Section>
        <TextComponent text="Hi, Jason" />
        <TitleComponent text="Be Productive today" />
      </Section>
      <Section>
        <RowComponent
          onPress={() => console.log('press')}
          justify="space-between"
          styles={globalStyles.inputContainer}
        >
          <TextComponent text="search" />
          <Text>Icon</Text>
        </RowComponent>
      </Section>
      <Section>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task Progress" />
              <TextComponent text="card component" />
              <TextComponent text="tag" />
            </View>
            <View>
              <TextComponent text="circleChar" />
            </View>
          </RowComponent>
        </CardComponent>
      </Section>
    </Container>
  );
};

export default HomeScreen;
