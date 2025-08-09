import React from 'react';
import { Box, Typography } from '@mui/material';

const RoundCircle = () => {
  return (
    <Box
      sx={{
        width: {xl:'450px', md:'300px', sm:"340px", xs:"200px"}, // Adjust the size to match the desired appearance
        height: {xl:'450px', md:'300px', sm:"340px", xs:"200px"},
        borderRadius: '50%',
        backgroundColor: '#F5F5F5', // Light background color
        border: '7px solid #E8E8E8', // Grey outer border
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '30px',
        // margin:"auto"
      }}
    >
      {/* Inner progress border */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '7px solid transparent',
          borderTopColor: '#B6DFE3', // Yellow border for progress
          borderRightColor: '#B6DFE3',
          borderLeftColor: '#B6DFE3',
          transform: 'rotate(130deg)', // Slight rotation to mimic partial progress
        }}
      />
      
      {/* Centered Text */}
      <Box
        sx={{
          position: 'absolute',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Satoshi-Light',
            fontWeight: '400',
            fontSize: '30px',
          }}
        >
          Step
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Satoshi',
            fontWeight: '700',
            fontSize: '50px',
          }}
        >
          0/3
        </Typography>
      </Box>
    </Box>
  );
};

export default RoundCircle;
