import React, {FC, useState} from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {CloseIcon} from '../UI/Icons';
import {SortBy} from '../SortBy';
import {SizePicker} from '../SizePicker';
import {ColorPicker} from '../ColorPicker';
import {PricePicker} from '../PricePicker';
import {Separator} from '../UI/Separator';
import {Button} from '../UI/Button';

type CatalogFilterProps = {
  isVisible: boolean;
  onClose: () => void;
};

const CatalogFilter: FC<CatalogFilterProps> = ({
  isVisible = false,
  onClose,
}) => {
  const [sortBy, setSortBy] = useState<string>('Popularity');
  const [sizes] = useState<number[]>([35, 36, 37, 38, 39, 41, 42, 43, 44, 45]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([36, 37, 38]);
  const [colors] = useState<string[]>([
    '#FF5A5A',
    '#FFFFFF',
    '#2878D5',
    '#000000',
  ]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [productsCountForChart] = useState<number[]>([
    0, 0, 0, 10, 25, 50, 60, 50, 25, 10, 0, 0, 0,
  ]);
  const [prices, setPrices] = useState<number[]>([150, 350]);

  return (
    <Modal animationType="slide" visible={isVisible} transparent={true}>
      <ScrollView style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.title}>Filters</Text>
            <TouchableOpacity onPress={onClose}>
              <CloseIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <SortBy value={sortBy} onChange={setSortBy} />

            <Separator />

            <SizePicker
              onChange={s => setSelectedSizes(s)}
              sizes={sizes}
              selectedSizes={selectedSizes}
            />

            <Separator />

            <ColorPicker
              onChange={c => setSelectedColors(c)}
              colors={colors}
              selectedColors={selectedColors}
            />

            <Separator />

            <PricePicker
              value={prices}
              chartData={productsCountForChart}
              min={0}
              max={500}
              onChange={setPrices}
              step={10}
            />

            <View style={styles.controls}>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.clearButton}>Clear All</Text>
              </TouchableOpacity>

              <View style={styles.applyButton}>
                <Button onPress={onClose} theme={'light'}>
                  Apply
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#676767',
  },
  modalView: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
    paddingTop: 23,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 31,
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 22,
    color: '#333333',
  },
  content: {
    width: '100%',
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 86,
  },
  applyButton: {
    width: 101,
    height: 40,
  },
  clearButton: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#333333',
  },
});

export {CatalogFilter};
