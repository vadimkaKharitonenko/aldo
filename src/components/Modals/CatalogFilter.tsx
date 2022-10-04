import React, {FC, useState, useCallback} from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {CloseIcon} from '../Icons';
import {SortBy} from '../SortBy';
import {Size} from '../Size';
import {Separator} from '../Separator';

type CatalogFilterProps = {
  isVisible: boolean;
  onClose: () => void;
};

const CatalogFilter: FC<CatalogFilterProps> = ({
  isVisible = false,
  onClose,
}) => {
  const [sortBy, setSortBy] = useState<string>('Popularity');
  const [sizes, setSizes] = useState<number[]>([]);

  console.log(sizes);

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

            <Size
              onChange={s => setSizes(s)}
              sizes={[35, 36, 37, 38, 39, 41, 42, 43, 44, 45]}
            />

            <Separator />
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
});

export {CatalogFilter};
