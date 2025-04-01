import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import YouTube from 'react-youtube';
import 'keen-slider/keen-slider.min.css';
import { Box, Typography } from '@mui/material';
import quoteIcon from '../image/quoteIcon.png'; // Replace with the actual quote icon image
import starRating from '../image/starRating.png'; // Replace with the actual star rating image

const SecondFaq = [
    {
      id: 1,
      title: 'Experience & Excellence',
      testimonialText:
        "Mozack’s team ought to have a rich understanding of the subject matter and that comes through loud and clear in the materials they deliver. The delay, which was the issue of major concern, only ended as we waited a little longer, though the final output was even better than what we expected.",
      starRating: starRating,
      videoId: 'mZ5hnNRBFsc', // A valid video ID
    },
    {
      id: 2,
      title: 'Quality & Dedication',
      testimonialText:
        "The Mozack has been motivated our team throughout the project. They were engaged with us throughout the process to make sure that what we wanted was done. Our communication problems which arose from misunderstanding of our initial needs were promptly addressed with a solution that met our needs.",
      starRating: starRating,
      videoId: 'mZ5hnNRBFsc', // Corrected video ID from the URL
    },
    {
      id: 3,
      title: 'Innovation & Creativity',
      testimonialText:
        "We were impressed with their offer and the way they came up with some of the solutions. They came up with distinct strategies that made our project stand PAGE  out in the market. There were some times that made me question the process a little but Mozack certainly rose to the occasion in terms of creativity and added a lot of value to our project.",
      starRating: starRating,
      videoId: 'mZ5hnNRBFsc', // Same video ID as example
    },
  ]

const SecondFAQSlider = ({
  spacing = 20, // Space between the slides
  loop = false, // Enable looping
  data 

}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop, // Enable continuous looping
    spacing, // Space between slides
    slides: {
      perView: 1.2, // Show more than 1 slide to ensure smooth scrolling
      spacing, // Consistent spacing between the slides
    },
    mode: 'free', // Allows smooth dragging behavior without snapping
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      '(min-width: 480px)': {
        slides: { perView: 1.2, spacing: 10 }, // Show more slides on small screens
      },
      '(min-width: 768px)': {
        slides: { perView: 1.8, spacing: 15 }, // Show more slides on medium screens
      },
      '(min-width: 1024px)': {
        slides: { perView: 2.5, spacing: 20 }, // Show more slides on large screens
      },
    },
  });

  // Function to handle YouTube options
  const videoOptions = {
    height: '288',
    width: '100%',
    borderRadius:"20px",
    playerVars: {
      autoplay: 0, // Don't autoplay when loaded
    },
  };

  return (
    <>
      <Box
        ref={sliderRef}
        className="keen-slider"
        sx={{
          width: '100%',
          display: 'flex',
          gap: spacing + 'px',
          overflow: 'visible !important',
        }}
      >
        {SecondFaq?.map((item) => (
          <Box
            key={item.id}
            className="keen-slider__slide"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: { xs: '20px', md: '30px' },
              borderRadius: '15px',
              border: '1px solid #E0E0E0',
              maxWidth: { xs: '100%', md: '850px' },
              margin: { md: '0 10px', xs: '0px 0px' },
            }}
          >
            {/* Left Section: Text Content */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: 'center', md: 'left' },
                marginBottom: { xs: '20px', md: '0' },
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Box
                  component="img"
                  src={quoteIcon}
                  alt="Quote Icon"
                  sx={{
                    width: '30px',
                    marginBottom: '10px',
                    mx: { xs: 'auto', md: '0' },
                  }}
                />
                <Box
                  component="img"
                  src={item.starRating}
                  alt="Star Rating"
                  sx={{
                    width: '120px',
                    marginBottom: '10px',
                    mx: { xs: 'auto', md: '0' },
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: '18px', md: '20px' },
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '10px',
                  mt: '10px',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: '#939393',
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  lineHeight: '28px',
                  maxWidth: '399px',
                  marginBottom: '10px',
                  mx: { xs: 'auto', md: '0' },
                }}
              >
                {item.testimonialText}
              </Typography>
            </Box>

            {/* Right Section: YouTube Video */}
            <Box
              sx={{
                width: { xs: '100%', md: '219px' },
                height: { xs: 'auto', md: '288px' },
                objectFit: 'contain',
                marginLeft: { md: '20px' },
                borderRadius:"14px",
                // border:"2px solid red",
                overflow:"hidden",
               
              }}
            >
              <YouTube videoId={item.videoId} opts={videoOptions}  />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Dots for navigation */}
      {loaded && instanceRef.current && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right !important',
            alignContent: 'right !important',
            marginTop: '20px',
            backgroundColor: '#F6F6F6',
            width: '74px',
            borderRadius: '10px',
            padding: '17.02px 18.24px 15.8px 19.45px',
            float: 'right',
          }}
        >
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <Box
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                sx={{
                  borderRadius: '25px',
                  margin: '0 5px',
                  width: currentSlide === idx ? '23.1px' : '7.29px',
                  height: '7.29px',
                  backgroundColor:
                    currentSlide === idx ? '#FFC800' : '#E0E0E0',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            );
          })}
        </Box>
      )}
    </>
  );
};

export default SecondFAQSlider;
