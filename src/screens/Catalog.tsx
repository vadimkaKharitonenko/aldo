import React, {FC, useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  NativeScrollEvent,
} from 'react-native';

import {ProductService, Product} from '../services/ProductService';

import {Button} from '../components/Button';
import {FilterIcon} from '../components/Icons';
import {ViewMode} from '../components/ViewMode';
import {ProductCard} from '../components/ProductCard';

const isCloseToBottom = (nativeEvent: NativeScrollEvent) => {
  const paddingToBottom = 20;
  return (
    nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
    nativeEvent.contentSize.height - paddingToBottom
  );
};

const CatalogScreen: FC = () => {
  const [viewMode, setViewMode] = useState<'rows' | 'grid'>('grid');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      const service = new ProductService();
      const p = await service.get({offset: page, limit: 10});
      setProducts(old => [...old, ...p]);
      setIsLoading(false);
    }
    getProducts();
  }, [page]);

  return (
    <ScrollView
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          setPage(page + 1);
        }
      }}
      scrollEventThrottle={400}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>All Products</Text>

          <View style={styles.controls}>
            <View style={styles.filterBtn}>
              <Button icon={<FilterIcon />} theme={'light'}>
                Filter
              </Button>
            </View>
            <View style={styles.viewMode}>
              <ViewMode value={viewMode} onPress={mode => setViewMode(mode)} />
            </View>
          </View>
        </View>

        <View style={styles.products}>
          {products.length
            ? products.map((product: Product, i: number) => (
                <View key={i} style={styles.product}>
                  <ProductCard info={product} index={i} />
                </View>
              ))
            : null}
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#0000ff" />
            </View>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 28,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#333A3A',
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  filterBtn: {
    width: 88,
    height: 30,
  },
  viewMode: {
    marginTop: 7,
  },
  products: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 25,
  },
  product: {
    width: '50%',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
});

export {CatalogScreen};
