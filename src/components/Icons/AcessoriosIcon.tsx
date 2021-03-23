import React from 'react';
import {Svg, Path, G} from 'react-native-svg';

const components = ({color}: {color?: string}) => {
  return (
    <Svg width="23.683" height="9.868" viewBox="0 0 23.683 9.868">
      <G id="reading" transform="translate(0 -149.334)">
        <G
          id="Grupo_25554"
          data-name="Grupo 25554"
          transform="translate(0 149.334)">
          <Path
            id="Caminho_29724"
            data-name="Caminho 29724"
            d="M22.7,153.281h-.1a4.922,4.922,0,0,0-9-1.628,4.129,4.129,0,0,0-1.754-.345,4.132,4.132,0,0,0-1.754.345,4.922,4.922,0,0,0-9,1.628h-.1a.987.987,0,1,0,0,1.974h.1a4.934,4.934,0,0,0,9.768-.987,4.838,4.838,0,0,0-.077-.761,2.027,2.027,0,0,1,1.064-.226,2.007,2.007,0,0,1,1.064.224,4.863,4.863,0,0,0-.077.763,4.934,4.934,0,0,0,9.768.987h.1a.987.987,0,0,0,0-1.974Z"
            transform="translate(0 -149.334)"
            fill={color ?? '#7f7f7f'}
          />
        </G>
      </G>
    </Svg>
  );
};

export default components;
