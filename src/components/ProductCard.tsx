import React, {FC} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Product} from '../services/ProductService';
import {StarIcon} from './Icons';

type ProductCardProps = {
  info: Product;
  index: number;
};

const ProductCard: FC<ProductCardProps> = ({info, index}) => {
  const {title, images, price, salePrice} = info;
  const source: ImageSourcePropType | undefined = {uri: images[0]};

  const hasPrice = salePrice > 0;

  return (
    <View style={[styles.product, index % 2 === 0 ? styles.borderRight : {}]}>
      <TouchableOpacity style={styles.favorite}>
        <StarIcon />
      </TouchableOpacity>

      {info.sale > 0 ? (
        <View style={styles.sale}>
          <Text style={styles.saleText}>{info.sale} % off</Text>
        </View>
      ) : null}

      <Image style={styles.image} source={source} />
      <View style={styles.info}>
        <Text style={styles.brand}>Aldo</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.prices}>
          {hasPrice ? (
            <Text style={styles.salePrice}>AED {salePrice}</Text>
          ) : null}
          <Text style={[styles.price, hasPrice ? styles.colorRed : {}]}>
            AED {price}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    position: 'relative',
    display: 'flex',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    borderStyle: 'solid',
  },
  favorite: {
    position: 'absolute',
    top: 13,
    left: 14,
    zIndex: 1,
  },
  brand: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: '#6F7F8A',
  },
  title: {
    height: 32,
    paddingTop: 3,
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: '#333A3A',
    lineHeight: 14,
  },
  image: {
    width: '100%',
    height: 159,
  },
  prices: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },
  price: {
    paddingTop: 6,
    marginLeft: 'auto',
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#333333',
  },
  info: {
    paddingLeft: 16,
    paddingTop: 12,
    paddingRight: 8,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: '#CCCCCC',
  },
  sale: {
    position: 'absolute',
    top: 12,
    right: 0,
    zIndex: 1,
    padding: 5,
    paddingTop: 4,
    backgroundColor: '#333333',
  },
  colorRed: {
    color: '#FF5A5A',
  },
  salePrice: {
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: '#6F7F8A',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  saleText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 9,
    color: '#FFFFFF',
  },
});

export {ProductCard};
