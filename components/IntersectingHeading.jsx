'use client';

import { useEffect } from 'react';

const IntersectingHeading = ({ text }) => {
  useEffect(() => {
    const characterElements = document.getElementsByClassName('character');

    const bgImage = document.getElementById('bgImage');
    [...characterElements].forEach((characterElement) => {
      const rect1 = characterElement.getBoundingClientRect();
      const rect2 = bgImage.getBoundingClientRect();

      if (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      ) {
        characterElement.style.color = '#fff';
      }
    });
  }, []);

  return (
    <h1>
      {text.split('').map((char, index) => (
        <span key={index} className={'character'}>
          {char}
        </span>
      ))}
    </h1>
  );
};

export default IntersectingHeading;
