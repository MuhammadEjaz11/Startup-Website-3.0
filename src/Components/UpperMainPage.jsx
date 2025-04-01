import { Box, Typography } from '@mui/material'
import React from 'react'
import StyledHeading from './StyledHeading'

const UpperMainPage = () => {
  return (
    <Box
    sx={{
      justifyContent: "space-between",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      maxWidth: "1524px",
      margin: "0 auto",
      paddingTop: {md:"130px", xs:"50px"},
      paddingBottom: {md:"130px", sm:"70px", xs:"70px"},
    }}
  >
    {/* Left Content */}
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "50%" },
        textAlign: { xs: "center", md: "left" },
        paddingRight: { xs: "0", md: "20px" },
      }}
    >
      <StyledHeading title1="About" title2="Us"/>
      <Typography
        sx={{
          color: "#939393",
          fontFamily: "Inter",
          fontSize: {  md: "16px", xs: "14px" },
          lineHeight: {md:"36px", sm:""},
          marginTop: "20px",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s Lorem Ipsum is simply dummy text Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the
        1500s Lorem Ipsum is <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s
      </Typography>
      <Box
        className="ourMission"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
       
        <Box
          className="missionText"
          sx={{
            maxWidth: { xs: "100%", sm: "85%" },
            marginTop: { xs: "20px", sm: "0" },
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "satoshi",
            }}
          >
            Our Mission
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "36px",
              color: "#939393",
              fontWeight: 400,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s
          </Typography  >
        </Box>
      </Box>
    </Box>

    {/* Right Content */}
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "50%" },
        marginTop: { xs: "40px", md: "0" },
        padding:{sm:'0px 30px !important', xs:'0px 30px !important'},
      }}
    >
      <Box>
        <img src="" alt="About Us" style={{ width: "100%", border:"2px solid red" }}  />
      </Box>
      <Box
        sx={{
          boxShadow: "0px 1px 62px 0px #00000014",
          borderRadius: "20px", 
          padding: "21px 37px 22px 26px",
          backgroundColor: "#FFFFFF",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          textAlign:'center',
          maxWidth: "456px",
          margin: "0 auto",
          zIndex: "2",
          marginTop: "-40px",
          flexDirection: { xs: "column", sm: "row" },
          border:"none"
          
        }}
      >
      
        
        
      </Box>
    </Box>
  </Box>

  )
}

export default UpperMainPage