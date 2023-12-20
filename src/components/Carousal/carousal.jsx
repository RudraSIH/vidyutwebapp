import React, { useState, useEffect } from 'react';
import './carousal.css'; // Assuming you have a CSS file for styling

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? children.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === children.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, children.length]);

  return (
    <div className="carousel">
      <div className="carousel-images">
        {React.Children.map(children, (child, index) => (
          React.cloneElement(child, { style: { display: index === currentIndex ? 'block' : 'none' } })
        ))}
      </div>
    
    </div>
  );
};

export default Carousel;
