import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import {LogoSmallIcon} from '../Icons';

type HeaderTitleProps = {children: string; tintColor?: string | undefined};

const HeaderTitle: FC<HeaderTitleProps> = () => {
  return (
    <View style={styles.container}>
      <LogoSmallIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 60,
  },
});

export {HeaderTitle};
