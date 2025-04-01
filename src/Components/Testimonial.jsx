import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, Typography } from '@mui/material';
import StyledHeading from './StyledHeading';

const Testimonial = ({
  loop = false,
  data , 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop,
    mode: 'free', // Free scrolling
    slides: {
      perView: 1, // Default to 1 slide per view on small screens
      spacing: 15, // Adjust spacing as needed
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      '(min-width: 320px)': {
        slides: { perView: 1, spacing: 15 }, // Mobile screens
      },
      '(min-width: 768px)': {
        slides: { perView: 2.5, spacing: 20 }, // Tablets
      },
      '(min-width: 1024px)': {
        slides: { perView: 3.5, spacing: 25 }, // Laptops
      },
      '(min-width: 1200px)': {
        slides: { perView: 4.5, spacing: 30 }, // Large screens
      },
    },
  });

  return (
    <>
      <Box
        sx={{
          marginTop: '30px',
          margin: '0 auto',
          maxWidth: '1572px',
          padding: '0px 20px',
        }}
      >
        <StyledHeading
          title1="Client"
          sx1={{ fontFamily: 'satoshi-light' }}
          title2="Testimonials"
          sx2={{ fontFamily: 'satoshi' }}
        />
      </Box>
      <Box className="navigation-wrapper">
        <Box
          ref={sliderRef}
          className="keen-slider"
          sx={{
            marginTop: '20px',
            overflow: {lg: 'visible !Important', md:'visible !important', sm:'hidden !important', xs:'hidden !important'},
            display: 'flex',
            gap: '20px',
          }}
        >
          {data.map((item, index) => (
            <Box
              key={index}
              className="keen-slider__slide"
              sx={{
                borderRadius: '15px',
                boxShadow: '0px 6px 62px -12px #00000014',
                padding: '35px 40px 40px',
                backgroundColor: '#fff',
                margin: { md: '100px 0px 50px 0px', xs: '40px 0px 40px 0px' },
                maxWidth: { xs: '90%', md: '545px' },
                position:"relative"
              }}
            >
              <img src={item?.starURL} alt="Rating Star" />
              <Typography
                sx={{
                  color: '#939393',
                  fontFamily: 'Inter',
                  fontSize: { xs: '14px', md: '16px' },
                  lineHeight: '36px',
                  marginTop: '20px',
                }}
              >
                {item.testimonialText}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  marginTop: '19px',
                    //  border:"2px solid red",
                     position:"absolute",
                     bottom:"20px"

                }}
              >
                <img src={item.userAvatar} width={'50px'} height={'50px'} alt="Client Avatar" />
                <Box
                  sx={{
                    marginLeft: '16px',
                 
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'satoshi',
                      fontSize: '18px',
                    }}
                  >
                    {item.memberName}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#939393',
                      fontFamily: 'Inter',
                      fontSize: { xs: '14px', md: '16px' },
                    }}
                  >
                    {item.memberRoll}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {loaded && instanceRef.current && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            marginTop: '20px',
            backgroundColor: '#F6F6F6',
            width: '124px',
            borderRadius: '10px',
            padding: '17px 18px',
            float: 'right',
          }}
        >
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <Box
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              sx={{
                width: currentSlide === idx ? '23px' : '7px',
                height: '7px',
                backgroundColor: currentSlide === idx ? '#FFC800' : '#E0E0E0',
                transition: 'background-color 0.3s ease',
                cursor: 'pointer',
                margin: '0 5px',
                borderRadius: '25px',
              }}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default Testimonial;
