'use client';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useState, useEffect, useRef } from 'react';

const EyeAnimation = (props) => {
  const playerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
  }, []);

  const { style, mobileStyle, animationSrc } = props;

  const styleCombined = { ...style, ...mobileStyle };

  return (
    <div>
      <Player
        autoplay
        loop
        ref={playerRef}
        src={animationSrc}
        style={isMobile ? styleCombined : style}
      >
        <Controls
          visible={false}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
    </div>
  );
};

export default EyeAnimation;
