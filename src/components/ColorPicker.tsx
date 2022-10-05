import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type ColorPickerProps = {
  colors: string[];
  onChange: (x: string[]) => void;
  selectedColors: string[];
};

const isSelected = (colors: string[], color: string) => {
  return colors.includes(color);
};

const ColorPicker: FC<ColorPickerProps> = ({
  colors,
  selectedColors,
  onChange,
}) => {
  const onCheck = (color: string) => {
    if (isSelected(selectedColors, color)) {
      onChange(selectedColors.filter(s => s !== color));
    } else {
      onChange([...selectedColors, color]);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Color</Text>

      <View style={styles.colors}>
        {colors.map((color: string, i) => (
          <TouchableOpacity key={i} onPress={() => onCheck(color)}>
            <View
              style={[
                styles.color,
                {backgroundColor: color},
                isSelected(selectedColors, color) ? styles.colorSelected : null,
              ]}
            />
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
  colors: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  color: {
    width: 33,
    height: 33,
    marginRight: 15,
    borderRadius: 50,
    borderColor: '#CECECE',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  colorSelected: {
    borderColor: 'green',
    borderWidth: 3,
  },
});

export {ColorPicker};
