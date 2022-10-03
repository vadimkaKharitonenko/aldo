import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {GridIcon, RowsIcon} from './Icons';

type ViewModeProps = {
  value: 'rows' | 'grid';
  onPress: (x: 'rows' | 'grid') => void;
};

const ViewMode: FC<ViewModeProps> = ({value, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => onPress('rows')}>
        <RowsIcon opacity={value === 'rows' ? '1' : '0.36'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('grid')}>
        <GridIcon opacity={value === 'grid' ? '1' : '0.36'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginRight: 13,
  },
});

export {ViewMode};
