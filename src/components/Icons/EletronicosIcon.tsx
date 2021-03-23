import React from 'react';
import {Svg, Path, G} from 'react-native-svg';

const components = ({color}: {color?: string}) => {
  return (
    <Svg width="16.93" height="13.302" viewBox="0 0 16.93 13.302">
      <G id="computer" transform="translate(-32 -80)">
        <Path
          id="Caminho_29819"
          data-name="Caminho 29819"
          d="M41.069,385.209H39.86A1.514,1.514,0,0,1,38.379,384H32v.72a1.1,1.1,0,0,0,1.094,1.094H47.836a1.1,1.1,0,0,0,1.094-1.094V384H42.551A1.514,1.514,0,0,1,41.069,385.209Z"
          transform="translate(0 -292.512)"
          fill={color ?? '#7f7f7f'}
        />
        <Path
          id="Caminho_29820"
          data-name="Caminho 29820"
          d="M88,120.465h12.7V112H88Zm9.847-4.287-3.023,2.116a.3.3,0,1,1-.347-.5l3.023-2.116a.3.3,0,0,1,.347.5Zm-7,.109,3.023-2.116a.3.3,0,0,1,.347.5L91.2,116.782a.3.3,0,1,1-.347-.5Zm-.6,2.418,7.86-5.442a.3.3,0,0,1,.344.5l-7.86,5.442a.3.3,0,0,1-.344-.5Z"
          transform="translate(-53.884 -30.791)"
          fill={color ?? '#7f7f7f'}
        />
        <Path
          id="Caminho_29821"
          data-name="Caminho 29821"
          d="M71.116,80.931A.932.932,0,0,0,70.185,80H56.931a.932.932,0,0,0-.931.931v9.952H71.116Zm-.6,9.046a.3.3,0,0,1-.3.3h-13.3a.3.3,0,0,1-.3-.3V80.907a.3.3,0,0,1,.3-.3h13.3a.3.3,0,0,1,.3.3Z"
          transform="translate(-23.093)"
          fill={color ?? '#7f7f7f'}
        />
        <Path
          id="Caminho_29822"
          data-name="Caminho 29822"
          d="M218.231,384.6h1.209a.908.908,0,0,0,.855-.6h-2.919A.908.908,0,0,0,218.231,384.6Z"
          transform="translate(-178.371 -292.512)"
          fill={color ?? '#7f7f7f'}
        />
      </G>
    </Svg>
  );
};

export default components;
