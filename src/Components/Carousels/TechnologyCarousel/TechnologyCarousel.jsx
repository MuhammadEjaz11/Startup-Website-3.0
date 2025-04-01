import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, Typography } from '@mui/material';

const TechnologyCarousel = ({
  perView = 10,
  spacing = 15,
  mode = 'free',
  loop = true,
  numberOfSlides = 10,
  slides = 4,
  swiping = true,
  url,
  text,
  data = [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 10],
}) => {
  const [sliderRef] = useKeenSlider({
    loop, // Enable continuous looping
    spacing: 15,
    slides: {
      perView: 1, // Number of slides visible at once
      spacing, // Space between slides
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2 }, // Show 2 posts on tablets
      },
      '(min-width: 1024px)': {
        slides: { perView: 7.5,
          spacing, // Space between slides
         }, // Show 3 posts on larger screens
      },
    },
  });

  const [dynamicSize, setDynamicSize] = useState({
    width: '400px',
    height: '400px',
  });

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 600) {
        setDynamicSize({ width: '400px', height: '200px' });
      } else {
        setDynamicSize({ width: '400px', height: '200px' });
      }
    };

    updateSize(); // Set initial size
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <Box ref={sliderRef} className="keen-slider" swiping={false}>
        {data.map((item, index) => (
          <Box
            key={index}
            className="keen-slider__slide"
            sx={{
              borderRadius: '8px',
              background: '#252525',
              width: {md :"400px", sm:"100%"},
              height: dynamicSize.height,
              display: 'grid',
              placeContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'center',
                gap: '20px',
                justifyContent: 'center',
              }}
            >
              <img
                src={item?.image}
                alt={`Slide ${index}`}
                style={{
                  objectFit: 'contain',
                  width: '60px',
                }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '15px',
                  textAlign:"center"
                }}
              >
                {item?.type}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TechnologyCarousel;
