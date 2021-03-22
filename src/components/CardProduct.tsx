import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from './Button';

interface CardProps {
  image: string;
  title: string;
  price: number;
  route: string;
}

const Card = ({image, title, price}: CardProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: image.replace('.com', '.herokuapp.com')}}
      />
      <View style={styles.informationContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>R${price}</Text>
        <Button>ver produto</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    shadowColor: '#00001F',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    marginBottom: 20,
    borderRadius: 14,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'center',
  },
  informationContainer: {
    paddingHorizontal: 13,
    paddingBottom: 30,
    paddingTop: 15,
  },
  title: {
    fontFamily: 'Roboto',
    color: '#000000B3',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  price: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#000000B3',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 18,
  },
});

export default Card;
