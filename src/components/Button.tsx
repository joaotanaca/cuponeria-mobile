import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonsProps extends TouchableOpacityProps {
  buttonName?: string;
  children?: JSX.Element | string;
}

const Button = ({buttonName, children, ...props}: ButtonsProps) => {
  return (
    <TouchableOpacity
      style={{...styles.buttonContainer, ...(props.style as {})}}
      {...props}>
      <LinearGradient
        style={styles.touchContainer}
        colors={['#24C92B', '#099F0F']}
        useAngle
        angle={90}>
        <Text style={styles.text}>{buttonName ?? children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
  },
  touchContainer: {
    borderRadius: 18,
    shadowOffset: {width: 0, height: 9},
    shadowColor: '#00000029',
    shadowOpacity: 1.0,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default Button;
