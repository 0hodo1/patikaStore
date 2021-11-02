import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

const Card = ({product}) => {
  state = product.inStock;
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.inStock}>{this.state ? '' : ' Stokta Yok'}</Text>
    </View>
  );
};

export default Card;
