import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import PortfolioCard from './PortfolioCard';

const PortfolioSlider = ({ filteredPortfolioList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true, // Enable continuous looping
    slides: {
      perView: 4, // Default: Show 4 slides
      spacing: 15, // Space between the slides
    },
    mode: 'free', // Smooth dragging behavior
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      '(max-width: 600px)': {
        slides: { perView: 1, spacing: 10 }, // Show 1 slide on small screens
      },
      '(max-width: 960px)': {
        slides: { perView: 2, spacing: 10 }, // Show 2 slides on medium screens
      },
      '(max-width: 1280px)': {
        slides: { perView: 3, spacing: 15 }, // Show 3 slides on larger screens
      },
      '(min-width: 1281px)': {
        slides: { perView: 4, spacing: 15 }, // Show 4 slides on large screens
      },
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {filteredPortfolioList.map((x, i) => (
          <div className="keen-slider__slide" key={i}>
            <PortfolioCard imageURL={x?.imageURL} title={x?.title} desc={x?.desc} />
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      {loaded && instanceRef.current && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <div
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              style={{
                width: currentSlide === idx ? '23px' : '8px',
                height: '8px',
                backgroundColor: currentSlide === idx ? '#FFC800' : '#E0E0E0',
                borderRadius: '50%',
                margin: '0 5px',
                transition: 'background-color 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PortfolioSlider;
