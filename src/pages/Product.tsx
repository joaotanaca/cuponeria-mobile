/* eslint-disable react-hooks/exhaustive-deps */
import {useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Template from '../components/Template';
import {ProductI} from '../intefaces/products';
import api from '../services/api';

const Pages: React.FC = () => {
  const {id} = useRoute().params as {id: string};
  const [product, setProduct] = useState({} as ProductI);
  useEffect(() => {
    api.get(`/products/${id}`).then(({data}) => {
      setProduct(data);
    });
  }, []);
  return (
    <Template>
      <View style={styles.container}>
        {product.description && (
          <>
            <Image
              style={styles.image}
              source={{uri: product.image.replace('.com', '.herokuapp.com')}}
            />
            <View>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>R${product.price}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <Button>comprar</Button>
            </View>
          </>
        )}
      </View>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 14,
    resizeMode: 'center',
  },
  informationContainer: {
    paddingHorizontal: 13,
    paddingBottom: 30,
    paddingTop: 15,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#000000B3',
    fontSize: 22,
    marginTop: 10,
  },
  price: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#4CAF50',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 18,
  },
  description: {
    fontFamily: 'Roboto',
    color: '#000000B3',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 18,
  },
});

export default Pages;
