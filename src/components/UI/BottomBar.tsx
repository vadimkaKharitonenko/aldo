import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {Screen} from '../../navigation/types';

import {HomeIcon, SearchIcon, FavoriteIcon, AccountIcon} from './Icons';

type BottomBarProps = {
  onPress?: (x: Screen) => void;
  screen?: Screen;
};

const BottomBar: FC<BottomBarProps> = ({
  onPress = () => {},
  screen = 'Home',
}) => {
  return (
    <View style={[styles.container, styles.elevation]}>
      <TouchableOpacity onPress={() => onPress('Home')}>
        <HomeIcon opacity={screen === 'Home' ? '1' : '0.36'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('Catalog')}>
        <SearchIcon color={screen === 'Catalog' ? '#333333' : '#A0A0A0'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('Favorites')}>
        <FavoriteIcon opacity={screen === 'Favorites' ? '1' : '0.36'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('Account')}>
        <AccountIcon opacity={screen === 'Account' ? '1' : '0.36'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 72,
    backgroundColor: '#FFFFFF',
    paddingLeft: 40,
    paddingRight: 40,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});

export {BottomBar};
