import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type SizeProps = {
  sizes: number[];
  onChange: (x: number[]) => void;
};

const Size: FC<SizeProps> = ({sizes}) => {
  return (
    <View>
      <Text style={styles.title}>Size</Text>

      <View style={styles.sizes}>
        {sizes.map((size: number, i: number) => (
          <TouchableOpacity
            key={i}
            onPress={() => {}}
            style={[styles.size, styles.sizeSelected]}>
            <Text style={[styles.sizeText, styles.sizeTextSelected]}>
              {size}
            </Text>
          </TouchableOpacity>
        ))}
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
  sizes: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  size: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 30,
    marginRight: 9,
    marginBottom: 11,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
  },
  sizeText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#333333',
  },
  sizeSelected: {
    backgroundColor: '#2F2F2F',
  },
  sizeTextSelected: {
    color: '#FFFFFF',
  },
});

export {Size};
