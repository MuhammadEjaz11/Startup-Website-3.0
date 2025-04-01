import { Box, Typography } from '@mui/material';
import React from 'react';

const GraphicCard = ({
  iconURL = "",
  title = "",
  desc = "",
  style = {},
}) => {
  return (
    <Box
      sx={{
        flexBasis: { xs: '100%', sm: '48%', md: '31%' },
        border: "1px solid #E9E9E9",  // Default border when not hovered
        p: { xs: '10px', md: '20px' },
        marginBottom: { xs: '20px', md: '0' },
        textAlign: { xs: 'center', md: 'left' },
        borderRadius: "15px",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        transition: "box-shadow 0.3s ease, border 0.3s ease",  // Smooth transition for hover effect
        "&:hover": {
          boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.15)",  // Box shadow when hovered
          border: "none",  // Remove border when hovered
          cursor:"pointer"
        },
        ...style,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'center' },
        }}
      >
        <img src={iconURL} alt="Icon" style={{ width: 'auto', height: '170px' }} />
      </Box>

      <Typography
        sx={{
          marginTop: '33px',
          color: '#1C1C1C',
          fontFamily: 'satoshi',
          fontSize: { xs: '20px', md: '27px' },
          fontWeight: 700,
          lineHeight: { xs: '28px', md: '36.99px' },
          textAlign: "center"
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: { xs: '14px', md: '16px' },
          lineHeight: { xs: '24px', md: '36px' },
          color: '#939393',
          fontWeight: 400,
          marginTop: '10px',
          textAlign: "center"
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
};

export default GraphicCard;
