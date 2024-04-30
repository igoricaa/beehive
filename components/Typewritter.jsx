'use client';
import { useState, useEffect } from 'react';

const Typewriter = ({ strings }) => {
  const [currentString, setCurrentString] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const string = strings[currentIndex];

        if (!isDeleting) {
          setCurrentString(string.substring(0, currentCharIndex + 1));
          setCurrentCharIndex((prevCharIndex) => {
            if (prevCharIndex === string.length - 1) {
              setIsDeleting(true);
              return prevCharIndex;
            } else {
              return prevCharIndex + 1;
            }
          });
        } else {
          setCurrentString(string.substring(0, currentCharIndex));
          setCurrentCharIndex((prevCharIndex) => {
            if (prevCharIndex === 0) {
              setIsDeleting(false);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
              return 0;
            } else {
              return prevCharIndex - 1;
            }
          });
        }
      },
      currentString.length === strings[currentIndex].length ? 1500 : 50
    );

    return () => clearInterval(interval);
  }, [
    currentIndex,
    currentCharIndex,
    isDeleting,
    strings,
    currentString.length,
  ]);

  return <span>{currentString}</span>;
};

export default Typewriter;
