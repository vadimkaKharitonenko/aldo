import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {CartIcon} from '../Icons';

type HeaderRightProps = {tintColor?: string | undefined; canGoBack: boolean};

const HeaderRight: FC<HeaderRightProps> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <CartIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {HeaderRight};
