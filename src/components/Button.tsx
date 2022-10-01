import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  children: any;
  theme?: 'dark' | 'light';
  width?: number | string;
  height?: number | string;
  onPress?: () => void;
};

const Button: FC<ButtonProps> = ({
  children,
  theme = 'dark',
  width = '100%',
  height = 40,
  onPress = () => {},
}) => {
  const backgroundColor = theme === 'dark' ? '#333333' : 'transparent';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor,
          width,
          height,
        },
      ]}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export {Button};
