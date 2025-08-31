import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import StyledHeading from './StyledHeading'; // Assuming this is already defined
import awardOne from '../image/award_one.webp'; // Update with your image paths
import awardTwo from '../image/award_two.webp';
import awardThree from '../image/award_three.webp';
import awardFour from '../image/award_four.webp';
import awardFive from '../image/award_five.webp';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AwardsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Slick slider settings
  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    dots: false, // Custom dots control at bottom
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <Box sx={{ margin: '0 auto', padding: { xs: '0px', md: '0' }, marginBottom: { xs: '50px', md: '130px' } }}>
      <StyledHeading
        sx={{ justifyContent: 'left' }}
        title1="Awards &"
        sx1={{ fontFamily: 'satoshi !important' }}
        title2="Recognitions"
        sx2={{ fontFamily: 'satoshi-light !important' }}
      />

      <Typography
        sx={{
          maxWidth: { xs: '100%', md: '1000px' },
          fontFamily: 'Inter',
       
          fontSize: { xs: '14px', md: '16px' },
          lineHeight: { xs: '24px', md: '36px' },
          color: '#939393',
          fontWeight: 400,
          marginBottom: '60px',
          textAlign: { xs: 'left', md: 'left' },
          marginTop: '40px',
         
          
        }}
      >
       At Patch Makers, great pride is taken among the employees on the recognition that is accomplished for the dedication following towards excellence within digital marketing and designing. The team has been held in high esteem with multiple commercial recognition, which accentuates the rearrangement , staging, and leadership in the digital realm among the team. These accolades reflect our dedication to not only meet but exceed client expectations and set new standards in our services. From 'Best in Design' to 'Top Digital Agency' awards, our achievements inspire us to continue providing exceptional digital solutions.
      </Typography>

      <Slider ref={sliderRef} {...sliderSettings}>
        <Box className="keen-slider__slide" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRight: '1px solid #F1F1F1',
        }}>
          <img src={awardOne} style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain', margin:"auto" }} alt="Award One" />
        </Box>
        <Box className="keen-slider__slide" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRight: '1px solid #F1F1F1' }}>
          <img src={awardTwo} style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain', margin:"auto"  }} alt="Award Two" />
        </Box>
        <Box className="keen-slider__slide" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRight: '1px solid #F1F1F1' }}>
          <img src={awardThree} style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain'  , margin:"auto" }} alt="Award Three" />
        </Box>
        <Box className="keen-slider__slide" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRight: '1px solid #F1F1F1' }}>
          <img src={awardFour} style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain', margin:"auto"  }} alt="Award Four" />
        </Box>
        <Box className="keen-slider__slide" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRight: '1px solid #F1F1F1' }}>
          <img src={awardFive} style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain', margin:"auto"  }} alt="Award Five" />
        </Box>
      </Slider>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          mt: '40px',
          mb: '140px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            backgroundColor: '#F6F6F6',
            width: '124px',
            borderRadius: '10px',
            padding: '17px 18px',
            height:"10px ",

          }}
        >
          {[...Array(5).keys()].map((idx) => (
            <Box
              key={idx}
              onClick={() => {
                sliderRef.current.slickGoTo(idx);
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
      </Box>
    </Box>
  );
};

export default AwardsSlider;
