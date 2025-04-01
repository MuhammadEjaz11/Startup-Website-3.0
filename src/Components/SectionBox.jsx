import { Box, Typography } from '@mui/material';
import SectionHeading from './SectionHeading';
import SectionPeragraph from './SectionPeragraph';
import CustomButton from './Button';
import StyledHeading from './StyledHeading';
import React, { useState } from 'react';
import ContactFormModal from './ContactModal';

const SectionBox = ({
  title = '',
  desc = '',
  btnText = '',
}) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        padding:{xs:"0px 0px"},
        textAlign: { xs: 'left', md: 'left' }, 
        maxWidth: '100%',
        // border:"2px solid red",
     
      }}
    >
      {/* Section Heading */}
      <StyledHeading title1="Why We're the" sx1={{fontFamily:'satoshi !important'}}  />
      <StyledHeading title1="Best Choice" sx2={{fontFamily:'satoshi-light !important'}} />



      {/* Section Paragraph */}
      <SectionPeragraph
        sx={{
          marginTop: {xl:'20px',md:"10px", xs:"20px"},
          fontFamily:'Inter', 
          fontSize: { xs: '14px',md:"12px", xl: '16px' }, 
          lineHeight: {xs:"28px", md: '28px', xl: '28px' },
          // border:"2px solid red"
          
        }}
        title="
        Designers Pro Hub is synonymous with excellence and innovation. We combine creativity with technology to deliver digital solutions that are not only efficient but also scalable and sustainable. Our commitment to your growth makes us the global IT partner you can trust."
      />

      {/* Custom Button */}
      <CustomButton
        title="Request A Quote"
        svgColor="white"
        buttonStyle={{
          marginTop: '45px',
          fontWeight: 600,
          textTransform: 'capitalize',
          color: 'white',
          padding: { xs: '12px',md:"20px 15px" ,xl: '20px' }, 
          fontFamily: 'Outfit',
          fontSize: { xs: '14px', md: '16px' }, 
          lineHeight: '20.16px',
          backgroundColor: '#1C1C1C',
          borderRadius: '15px',
          width: { xs: '100%', md: 'auto' }, 
        }}
        onClick={handleOpen}
      />
        <ContactFormModal open={open} handleClose={handleClose} />

    </Box>
  );
};

export default SectionBox;
