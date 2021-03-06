import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../components/CardProduct';
import Template from '../components/Template';
import {useProducts} from '../contexts/Products';
import {ProductI} from '../intefaces/products';
import api from '../services/api';

const Home = () => {
  const [products, setProducts] = useState([] as ProductI[]);
  const {filterProducts} = useProducts();
  useEffect(() => {
    api.get('/products').then(({data}) => setProducts(data));
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
export default Home;
