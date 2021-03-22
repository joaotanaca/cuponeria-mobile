/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './src/components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {Platform} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FF0000', '#FB135F', '#F91E96']}
        useAngle
        style={{
          height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        }}
        angle={99}
      />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Header />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={() => (
              <View>
                <Text>Test</Text>
              </View>
            )}
          />
          <Tab.Screen
            name="Test"
            component={() => (
              <View>
                <Text>Test</Text>
              </View>
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
