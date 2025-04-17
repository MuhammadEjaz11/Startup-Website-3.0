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
       At Patch Makers, we don’t just create patches — we bring your vision to life with unmatched quality, creativity, and precision. Whether it's embroidered, PVC, sublimation, leather, or chenille, our custom patches are crafted to impress."
      />
 <SectionPeragraph
        sx={{
          marginTop: {xl:'20px',md:"10px", xs:"20px"},
          fontFamily:'Inter', 
          fontSize: { xs: '14px',md:"12px", xl: '16px' }, 
          lineHeight: {xs:"28px", md: '28px', xl: '28px' },
          // border:"2px solid red"
          
        }}
        
        title="
       With fast turnaround times, competitive pricing, and a dedicated team of expert digitizers and designers, we make the process easy and reliable. From concept to delivery, we’re committed to delivering top-notch service and exceptional results that elevate your brand or style.
Choose Patch Makers — where quality meets creativity."
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
