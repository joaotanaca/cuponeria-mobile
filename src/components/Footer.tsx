import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Face from '../images/face.svg';
import Insta from '../images/insta.svg';
import Twitter from '../images/twitter.svg';
import Youtube from '../images/youtube.svg';
// import { Container } from './styles';

const components: React.FC = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#FF0000', '#F91E96']}
      useAngle
      angle={180}>
      <Face width={40} />
      <Insta width={40} />
      <Twitter width={40} />
      <Youtube width={40} />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 100,
  },
});
export default components;
