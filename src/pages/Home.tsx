import React from 'react';
import {StyleSheet, View} from 'react-native';

// import { Container } from './styles';

const pages: React.FC = () => {
  return <View style={style.container} />;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default pages;
