import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

const Separator: FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderStyle: 'solid',
  },
});

export {Separator};
