import React, {FC} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList, Screen} from '../navigation/types';

import {BottomBar} from '../components/UI/BottomBar';
import {SectionCard} from '../components/SectionCard';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Catalog'>;

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const onChangeScreen = (screen: Screen) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.twoColumns}>
            <View style={styles.cardContainer}>
              <SectionCard
                backgroundImage={require('../assets/img/section-for-women.png')}
                title={'For Her'}
                size={'small'}
              />
            </View>

            <View style={styles.cardContainer}>
              <SectionCard
                backgroundImage={require('../assets/img/section-for-men.png')}
                title={'For him'}
                size={'small'}
              />
            </View>
          </View>

          <View style={styles.oneColumn}>
            <SectionCard
              backgroundImage={require('../assets/img/section-for-kids.png')}
              title={'Kids'}
              size={'big'}
            />
          </View>

          <View style={styles.oneColumn}>
            <SectionCard
              backgroundImage={require('../assets/img/section-for-something.png')}
              title={'Something'}
              size={'big'}
            />
          </View>
        </View>
      </ScrollView>

      <BottomBar
        screen={'Home'}
        onPress={(screen: Screen) => onChangeScreen(screen)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    padding: 20,
    paddingTop: 28,
    paddingBottom: 72,
    backgroundColor: '#FFFFFF',
  },
  twoColumns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  oneColumn: {
    marginBottom: 24,
  },
  cardContainer: {
    width: '48%',
  },
});

export {HomeScreen};
