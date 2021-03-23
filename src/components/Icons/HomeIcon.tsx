import React from 'react';
import {Svg, Path} from 'react-native-svg';

const components = ({color}: {color?: string}) => {
  return (
    <Svg id="home" width="18.06" height="15.351" viewBox="0 0 18.06 15.351">
      <Path
        id="Shape"
        d="M7.224,15.351V9.933h3.612v5.418h4.515V8.127H18.06L9.03,0,0,8.127H2.709v7.224Z"
        fill={color ?? '#7f7f7f'}
      />
    </Svg>
  );
};

export default components;
