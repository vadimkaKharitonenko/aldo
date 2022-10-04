import React, {FC, useState, useEffect, useCallback} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  NativeScrollEvent,
  Dimensions,
  RefreshControl,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Screen} from '../navigation/types';

import {ProductService, Product} from '../services/ProductService';

import {Button} from '../components/Button';
import {FilterIcon} from '../components/Icons';
import {ViewMode} from '../components/ViewMode';
import {ProductCard} from '../components/ProductCard';
import {BottomBar} from '../components/BottomBar';
import {CatalogFilter} from '../components/Modals/CatalogFilter';

type CatalogScreenProps = NativeStackScreenProps<RootStackParamList, 'Catalog'>;

const isCloseToBottom = (nativeEvent: NativeScrollEvent) => {
  const paddingToBottom = 20;
  return (
    nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
    nativeEvent.contentSize.height - paddingToBottom
  );
};

const CatalogScreen: FC<CatalogScreenProps> = ({navigation}) => {
  const [viewMode, setViewMode] = useState<'rows' | 'grid'>('grid');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [refreshing, setRefreshing] = useState(false);
  const [filtersIsVisible, setFiltersIsVisible] = useState(false);

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

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setIsLoading(true);
    setProducts([]);
    setPage(0);
    const service = new ProductService();
    const p = await service.get({offset: 0, limit: 10});
    setProducts(p);
    setIsLoading(false);
    setRefreshing(false);
  }, []);

  const onChangeScreen = (screen: Screen) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <CatalogFilter
        isVisible={filtersIsVisible}
        onClose={() => setFiltersIsVisible(false)}
      />
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            setPage(page + 1);
          }
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        scrollEventThrottle={400}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>All Products</Text>

            <View style={styles.controls}>
              <View style={styles.filterBtn}>
                <Button
                  icon={<FilterIcon />}
                  theme={'light'}
                  onPress={() => setFiltersIsVisible(true)}>
                  Filter
                </Button>
              </View>
              <View style={styles.viewMode}>
                <ViewMode
                  value={viewMode}
                  onPress={mode => setViewMode(mode)}
                />
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

      <BottomBar
        screen={'Catalog'}
        onPress={(screen: Screen) => onChangeScreen(screen)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    paddingTop: 28,
    paddingBottom: 72,
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
