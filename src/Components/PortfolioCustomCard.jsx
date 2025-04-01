import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const PortfolioCardCustom = ({
    imageURL = "",
    desc = "",
    title = "",
    more = "",
    onClick = "",
    index = 0,
    style = {}
  }) => {
    return(
        <Box sx={{
            
            // boxShadow: '0px 11px 57.6px rgba(17, 17, 17, 0.05)',
            overflow:"hidden",
            borderRadius:"20px",
            // pb:"30px"
        
          }}>
      <img src={imageURL} style={{
        width:"100%",
        height:"auto",
        objectFit:"cover"
      }}/>
        <Box sx={{
          margin:'0px 15px 0px 30px',
          width:'100%',
          backdropFilter: 'blur(degree-of-blur)',
          backgroundColor:'white',
          display:"none",
          padding:'12px 1px',
        //   borderRadius:'15px',
         
        }}>
          {/* <Typography sx={{
            color:'#161616',
            fontFamily:'satoshi',
            fontWeight:'700',
            fontSize:'18px',
            lineHeight:'36px',
          }}>
          {title}
          </Typography> */}
          {/* <Typography sx={{
            fontFamily: "Inter",
            color:'#939393',
            fontWeight:'400',
            fontSize:'16px',
            lineHeight:'36px',

          }}>
          {desc}
          </Typography> */}
          {/* <Typography sx={{
            fontFamily: "Outfit",
            color:'#FFC800',
            fontWeight:'400',
            textTransform:'capitalize',
            backgroundColor:'none',
            fontSize:'16px',
            lineHeight:'36px',
            mt:"10px",
            onClick:{onClick},
            cursor:"pointer",
            

          }}>
          {more}
          </Typography> */}
        </Box>
      
          </Box>
    );
  };
  export default PortfolioCardCustom;