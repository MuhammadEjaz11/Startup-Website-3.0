import { Box, Typography } from '@mui/material';
import React from 'react';

const PortfolioCard = ({
  imageURL = "",
  desc = "",
  title = "",
  type,
  style = {},
}) => {
  return (
    <Box style={{
      position: 'relative',
      borderRadius: "20px",
      overflow: "hidden",
      width: "100%",
      norder:"2px solid red"
 
    
      
    }}>
      {type == "video"?
      <>
        <video
    src={imageURL}
    preload="metadata" 
    style={{
      width: "100%",
      borderRadius: "20px",
    }}
    controls
  />
      </>

      :
      <img src={imageURL} style={{
        width: "100%",
        // objectFit: "contain",
        borderRadius: "20px !important",
        norder:"2px solid red"

        
      }} />}
      <Box sx={{
        display:"none",
        margin: '0 auto',
        width: '60%',
        backdropFilter: 'blur(degree-of-blur)',
        backgroundColor: '#1E1E1EA8',
        padding: '12px 25px',
        borderRadius: '15px',
        position: "absolute",
            bottom: "-05%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)",
      }}>
        <Typography sx={{
          color: 'white',
          fontFamily: 'satoshi-light',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '26px',
        }}>
          {title}
        </Typography>
        <Typography sx={{
          fontFamily: 'satoshi',
          color: 'white',
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '23px',
        }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default PortfolioCard;
