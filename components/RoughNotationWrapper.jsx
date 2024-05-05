'use client';

import { RoughNotation } from 'react-rough-notation';
import { useInView } from 'react-intersection-observer';

const RoughNotationWrapper = ({
  type,
  strokeWidth,
  color,
  animationDelay,
  style,
  playOnce,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
    initialInView: true,
    triggerOnce: playOnce,
  });

  return (
    <span ref={ref}>
      <RoughNotation
        type={type}
        strokeWidth={strokeWidth}
        animationDelay={animationDelay}
        color={color}
        show={inView}
        style={style}
      >
        {children}
      </RoughNotation>
    </span>
  );
};

export default RoughNotationWrapper;
