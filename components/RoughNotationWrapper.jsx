'use client';

import { RoughNotation } from 'react-rough-notation';
import { useInView } from 'react-intersection-observer';

const RoughNotationWrapper = (props) => {
  const { ref, inView, entry } = useInView({ threshold: 1, initialInView: true});

  const { type, strokeWidth, color, style, children } = props;

  return (
    <div ref={ref}>
      <RoughNotation
        type={type}
        strokeWidth={strokeWidth}
        color={color}
        show={inView}
        style={style}
      >
        {children}
      </RoughNotation>
    </div>
  );
};

export default RoughNotationWrapper;
