import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Radio} from './UI/Radio';

type SortByProps = {
  value: string;
  onChange: (x: string) => void;
};

const SortBy: FC<SortByProps> = ({value, onChange}) => {
  return (
    <View>
      <Text style={styles.title}>Sort By</Text>
      <View style={styles.radio}>
        <Radio onPress={onChange} checked={value === 'Popularity'}>
          Popularity
        </Radio>
      </View>
      <View style={styles.radio}>
        <Radio onPress={onChange} checked={value === 'Price: High - Low'}>
          Price: High - Low
        </Radio>
      </View>
      <View>
        <Radio onPress={onChange} checked={value === 'Price: Low - High'}>
          Price: Low - High
        </Radio>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingBottom: 17,
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: '#333333',
  },
  radio: {
    marginBottom: 17,
  },
});

export {SortBy};
