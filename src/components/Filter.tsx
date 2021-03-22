import React, {useState} from 'react';
import {StyleSheet, View, Text, useColorScheme} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// import { Container } from './styles';

const Filter: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [color] = useState(useColorScheme() === 'dark' ? '#fff' : '#000');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sugestões para você</Text>
      <View style={styles.containerSelect}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={itemValue => setSelectedLanguage(itemValue)}
          style={styles.select}>
          <Picker.Item label="ordernar por" color={color} value="" />
          <Picker.Item label="menor preço" color={color} value="asc" />
          <Picker.Item label="maior preço" color={color} value="desc" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    color: '#000000B3',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerSelect: {
    width: '100%',
    borderRadius: 4,
    borderColor: '#F62996',
    borderWidth: 1,
    marginTop: 12,
  },
  select: {
    width: '100%',
    color: '#000000B3',
  },
  item: {
    backgroundColor: '#FFF',
  },
});

export default Filter;
