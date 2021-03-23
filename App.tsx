/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import LinearGradient from 'react-native-linear-gradient';
import {Platform} from 'react-native';
import HomeIcon from './src/components/Icons/HomeIcon';
import RoupasIcon from './src/components/Icons/RoupasIcon';
import AcessoriosIcon from './src/components/Icons/AcessoriosIcon';
import EletronicosIcon from './src/components/Icons/EletronicosIcon';
import Category from './src/pages/Category';
import Product from './src/pages/Product';
import {ProductsProvider} from './src/contexts/Products';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();
  return (
    <ProductsProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          translucent
          backgroundColor="transparent"
        />
        <LinearGradient
          colors={['#FF0000', '#FB135F', '#F91E96']}
          useAngle
          style={{
            height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
          }}
          angle={99}
        />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color}) => {
                switch (route.name) {
                  case 'Home':
                    return <HomeIcon color={color} />;
                  case 'Roupas':
                    return <RoupasIcon color={color} />;
                  case 'Acessorios':
                    return <AcessoriosIcon color={color} />;
                  case 'Eletronicos':
                    return <EletronicosIcon color={color} />;
                  default:
                    return <HomeIcon color={color} />;
                }
              },
              tabBarButton: ['Products'].includes(route.name)
                ? () => null
                : undefined,
            })}
            tabBarOptions={{
              activeTintColor: '#FF0000',
              inactiveTintColor: '#7F7F7F',
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen
              name="Roupas"
              component={Category}
              initialParams={{category: 'clothing'}}
            />
            <Tab.Screen
              name="Acessorios"
              component={Category}
              initialParams={{category: 'jewelery'}}
            />
            <Tab.Screen
              name="Eletronicos"
              component={Category}
              initialParams={{category: 'electronics'}}
            />
            <Tab.Screen name="Products" component={Product} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </ProductsProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
