import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {TextInput, StyleSheet, View, SafeAreaView} from 'react-native';

type FieldProps = {
  placeholder?: string;
  onChange: Dispatch<SetStateAction<string>>;
  icon?: JSX.Element;
};

const Field: FC<FieldProps> = ({placeholder, onChange, icon}) => {
  const [value, setValue] = useState('');

  const onChangeHandler = (text: string) => {
    onChange(text);
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.icon}>{icon}</View>
        <TextInput
          style={[styles.input, icon ? styles.withIcon : {}]}
          value={value}
          onChangeText={onChangeHandler}
          placeholder={placeholder}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    height: 48,
    paddingLeft: 17,
    backgroundColor: '#F5F5F5',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#333333',
  },
  withIcon: {
    paddingLeft: 56,
  },
  icon: {
    position: 'absolute',
    top: 16,
    left: 25,
    zIndex: 1,
    width: 16,
    height: 16,
  },
});

export {Field};
