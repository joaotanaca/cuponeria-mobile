import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Header from './Header';
import Filter from './Filter';

const components: React.FC = ({children}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
      }}>
      <Header />
      <Filter />
      {children}
    </ScrollView>
  );
};

export default components;
