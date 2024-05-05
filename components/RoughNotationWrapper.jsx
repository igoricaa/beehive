'use client';

import { RoughNotation } from 'react-rough-notation';
import { useInView } from 'react-intersection-observer';

const RoughNotationWrapper = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    initialInView: true,
  });

  const { type, strokeWidth, color, animationDelay, style, children } = props;

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
