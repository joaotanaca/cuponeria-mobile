/* eslint-disable react-hooks/exhaustive-deps */
import {useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../components/CardProduct';
import Template from '../components/Template';
import {useProducts} from '../contexts/Products';
import {ProductI} from '../intefaces/products';
import api from '../services/api';

const Category = () => {
  const [products, setProducts] = useState([] as ProductI[]);
  const {category} = useRoute().params as {category: string};
  const {filterProducts} = useProducts();
  const requestCategory = async () => {
    if (category === 'clothing') {
      const {data: men} = await api.get('/products/category/men clothing');
      const {data: women} = await api.get('/products/category/women clothing');
      setProducts([...men, ...women]);
    } else {
      const {data} = await api.get(`/products/category/${category}`);
      setProducts(data);
    }
  };
  useEffect(() => {
    requestCategory();
  }, []);
  return (
    <Template>
      <View style={styles.container}>
        {filterProducts(products).map(({image, id, price, title}) => (
          <Card image={image} key={id} price={price} title={title} route={id} />
        ))}
      </View>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
export default Category;
