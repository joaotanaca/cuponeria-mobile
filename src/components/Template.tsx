/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Header from './Header';
import Filter from './Filter';
import Footer from './Footer';
import {useRoute} from '@react-navigation/core';

const components: React.FC = ({children}) => {
  const {name} = useRoute();
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
      }}>
      <Header />
      {name !== 'Products' && <Filter />}
      {children}
      <Footer />
    </ScrollView>
  );
};

export default components;
