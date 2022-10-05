import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

type ButtonProps = {
  children: any;
  theme?: 'dark' | 'light';
  width?: number | string;
  height?: number | string;
  onPress?: () => void;
  icon?: JSX.Element;
};

const Button: FC<ButtonProps> = ({
  children,
  theme = 'dark',
  width = '100%',
  height = 40,
  onPress = () => {},
  icon,
}) => {
  const backgroundColor = theme === 'dark' ? '#333333' : 'transparent';
  const color = theme === 'dark' ? '#FFFFFF' : '#000000';
  const borderWidth = theme === 'dark' ? 0 : 1;
  const paddingLeft = icon ? 20 : 0;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor,
          width,
          height,
          borderWidth,
          paddingLeft,
        },
      ]}>
      {icon ? <View style={styles.btnIcon}>{icon}</View> : ''}
      <Text style={[styles.btnText, {color}]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    borderColor: '#000000',
    borderStyle: 'solid',
  },
  btnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  btnIcon: {
    position: 'absolute',
    top: 10,
    left: 8,
  },
});

export {Button};
