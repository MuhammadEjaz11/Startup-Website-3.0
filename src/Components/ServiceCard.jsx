import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({
  iconURL = "",
  btnURL = true,
  desc = "",
  title = "",
  btnText = true,
  index = 0,
  style = {},
  link =""
}) => {
  const navigate= useNavigate()
  return (
    <Box
      key={index}
      sx={{
        flexBasis: { xs: '100%', sm: '48%', md: '31%' },
        borderRight: { md: index < 2 && "1px solid #F1F1F1" },
        borderBottom: { xs: "1px solid #F1F1F1", md: "none" },
        p: { xs: '10px', md: '20px' },
        marginBottom: { xs: '20px', md: '0' },
        textAlign: { xs: 'center', md: 'left' },
       
        ...style,
      }}
      onClick={()=> navigate(link)}
    >
      <Box>
      <Box
      sx={{
        ":hover":{
            transform:"scale(1.02)"
          },
          cursor:"pointer",
          transition:".1s ease-in"
      }}
      >

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start',  },
        }}
      >
        <img src={iconURL} alt="Icon" style={{ width: '100px', height: 'auto' }} />
      </Box>
      
      <Typography
        sx={{
          marginTop: '33px',
          color: '#1C1C1C',
          fontFamily: 'satoshi',
          fontSize: { xs: '20px', md: '27px' },
          fontWeight: 700,
          lineHeight: { xs: '28px', md: '36.99px' },
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
        }}
      >
        {desc}
      </Typography>
      
      <Button
  sx={{

    paddingTop: '20px !important',
    padding: '0px',
    marginLeft: '0px !Important',
    display: 'flex',
    justifyContent: {md:'space-between', sm:'center', xs:'center'},
    width: { xs: '30%', md: '100px' },
    margin: { xs: '0 auto' },
    marginTop: '20px',
    color: '#70D0D9',
    fontFamily: 'Outfit',
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: '600',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'transparent', // Transparent on hover
      color: '#70D0D9', // Maintain or change text color on hover if needed
    },
  }}
>
  {btnText}
  <img src={btnURL} alt="Button Icon" style={{ marginLeft: '8px' , width:"9px"}} />
</Button>
      </Box>

    </Box>
    </Box>

  );
};

export default ServiceCard;
