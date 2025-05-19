
import React, { useState, useEffect } from "react";

interface AnimatedTextProps {
  words: string[];
  interval: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ words, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Change the word every interval
    const wordChangeInterval = setInterval(() => {
      // First fade out the current word
      setIsVisible(false);
      
      // After fade out, change the word and fade in again
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300); // This delay should be shorter than the interval
      
    }, interval);

    return () => clearInterval(wordChangeInterval);
  }, [interval, words.length]);

  return (
    <span 
      className={`transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {words[currentIndex]}
    </span>
  );
};

export default AnimatedText;
