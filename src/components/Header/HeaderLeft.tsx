import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {BurgerIcon} from '../Icons';

type HeaderLeftProps = {
  tintColor?: string | undefined;
  canGoBack: boolean;
  label?: string | undefined;
  navigation: any;
};

const HeaderLeft: FC<HeaderLeftProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <BurgerIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {HeaderLeft};
