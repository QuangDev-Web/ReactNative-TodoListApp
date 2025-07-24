import { View } from 'react-native';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import Section from '../components/Section';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import { globalStyles } from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';
import { Element4, Notification, SearchNormal1 } from 'iconsax-react-native';
import { colors } from '../constants/colors';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';

const HomeScreen = () => {
  return (
    <Container>
      <Section>
        <RowComponent justify="space-between">
          <Element4 size={24} color={colors.desc} />
          <Notification size={24} color={colors.desc} />
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
          <TextComponent text="Search task" color="#696B6F" />
          <SearchNormal1 size={24} color={colors.desc} />
        </RowComponent>
      </Section>
      <Section>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task Progress" />
              <TextComponent text="30/40 task done" />
              <SpaceComponent height={12} />
              <RowComponent justify="flex-start">
                <TagComponent text="March" />
              </RowComponent>
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
