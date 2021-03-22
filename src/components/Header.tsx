import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../images/logo.svg';

const Header: React.FC = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#FF0000', '#FB135F', '#F91E96']}
      useAngle
      angle={99}>
      <Logo width={180} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 17,
    paddingBottom: 13,
  },
});

export default Header;
