import React, {FC} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

import {RadioSelectedIcon, RadioNotSelectedIcon} from './Icons';

type RadioProps = {
  children: string;
  checked?: boolean;
  onPress?: (x: string) => void;
};

const Radio: FC<RadioProps> = ({
  children = '',
  checked = false,
  onPress = () => {},
}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPress(children)}>
        {checked ? <RadioSelectedIcon /> : <RadioNotSelectedIcon />}
        <Text style={styles.title}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    marginLeft: 20,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#333333',
  },
});

export {Radio};
