import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Carousel from 'react-material-ui-carousel';
import myImg  from "./../../src/image/react.svg.png"
const TechnologiesCard= ({
  image="",
  type="",
  index= 0,
  style={}
}) => {
 
  return (
    <Box >
      <Box sx={{
        textAlign:'center',
        width: {md:"231px", xs:"100%" },
        background:"#252525",
        borderRadius:"5px",
        padding:'48px 78px',
      }} >
        <img style={{width:"140px", height:"140px"}} src={myImg} />
        <Typography
        sx={{
          color: '#C4C4C4',
          fontFamily: 'Inter',
          fontSize: { xs: '20px', md: '14px' }, // Adjust font size for mobile and desktop
          fontWeight: 500,
          lineHeight: { xs: '28px', md: '21px' }, // Adjust line height for mobile and desktop
        }}
      >
        {type}
      </Typography>
      </Box>
      </Box>
     
  )
}

export default TechnologiesCard