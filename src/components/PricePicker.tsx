import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

type PricePickerProps = {
  chartData: number[];
  value: number[];
  min: number;
  max: number;
  step?: number;
  onChange: any;
};

const PricePicker: FC<PricePickerProps> = ({
  chartData,
  value,
  min,
  max,
  step = 1,
  onChange,
}) => {
  const maxCount = Math.max(...chartData);
  const columnWidth = Math.round(90 / chartData.length);

  return (
    <View>
      <Text style={styles.title}>Price</Text>

      <View style={styles.priceChart}>
        {chartData.map((count: number, i: number) => (
          <View
            style={[
              styles.column,
              {
                height: `${Math.round((count * 100) / maxCount)}%`,
                width: `${columnWidth}%`,
              },
            ]}
            key={i}
          />
        ))}
      </View>

      <View>
        <Slider
          containerStyle={styles.slider}
          animateTransitions
          maximumValue={max}
          minimumTrackTintColor="#000000"
          minimumValue={min}
          step={step}
          thumbTintColor="#000000"
          value={value}
          onValueChange={onChange}
          trackStyle={styles.sliderTrack}
          thumbStyle={styles.sliderThumb}
        />
      </View>

      <View style={styles.sliderFields}>
        <TextInput style={styles.sliderField} value={`${value[0]} AED`} />
        <TextInput style={styles.sliderField} value={`${value[1]} AED`} />
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
  priceChart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 63,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E8E8E8',
  },
  column: {
    backgroundColor: '#E8E8E8',
  },
  slider: {
    marginTop: -20,
  },
  sliderTrack: {
    height: 2,
  },
  sliderThumb: {
    width: 16,
    height: 16,
  },
  sliderFields: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderField: {
    width: 104,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#333333',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
});

export {PricePicker};
