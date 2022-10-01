import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {FacebookIcon, TwitterIcon, GoogleIcon, AppleIcon} from './Icons';

const Socials: FC = () => {
  return (
    <View style={styles.socials}>
      <TouchableOpacity style={styles.social}>
        <FacebookIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.social}>
        <TwitterIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.social}>
        <GoogleIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.social}>
        <AppleIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socials: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 36,
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    padding: 0,
    backgroundColor: '#333333',
    marginRight: 10,
  },
});

export {Socials};
