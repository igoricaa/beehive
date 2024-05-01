'use client';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';

const EyeAnimation = (props) => {
  const playerRef = useRef(null);

  const { style, animationSrc } = props;
  return (
    <div>
      <Player autoplay loop ref={playerRef} src={animationSrc} style={style}>
        <Controls
          visible={false}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
    </div>
  );
};

export default EyeAnimation;
