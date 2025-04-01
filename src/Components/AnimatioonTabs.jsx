import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomButton from './Button';



const TabContent = ({ title, description, imageSrc, dataTab }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on mobile, row on larger screens
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        maxWidth: { xs: '100%', md: '50%' }, // Full width on mobile, 50% on larger screens
        textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left-align on larger screens
        mb: { xs: '20px', md: '0' }, // Add margin on mobile to separate content
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#fff',
          fontWeight: 'bold',
          mb: 2,
          fontFamily: 'satoshi',
          fontSize: { xs: '22px', md: '27px' }, // Responsive font size
          lineHeight: '36px',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: '#fff',
          fontSize: { xs: '14px', md: '16px' }, // Responsive font size
          fontFamily: 'Inter',
          lineHeight: { xs: '24px', md: '36px' }, // Responsive line height
          mb: 3,
        }}
      >
        {description}
      </Typography>
      <CustomButton
        title="Order Now"
        buttonStyle={{
          color: '#1C1C1C',
          backgroundColor: '#fff',
          fontFamily: 'satoshi',
          fontSize: { xs: '14px', md: '16px' }, // Responsive font size
          fontWeight: '700',
          lineHeight: '36px',
          textTransform: 'capitalize',
          letterSpacing: '0.05em',
          padding: '20px',
          borderRadius: '15px',
          width: { xs: '100%', md: 'auto' }, // Full width button on mobile
        }}
      />
    </Box>
    <Box
      sx={{
        maxWidth: { xs: '100%', md: '50%' }, // Full width on mobile, 50% on larger screens
        textAlign: 'center',
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{
          width: '100%', // Ensure image is responsive
          height: 'auto',
        }}
      />
    </Box>
  </Box>
);

const AnimationTabs = ({dataTab}) => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

 

  return (
    <Box sx={{ backgroundColor: '#1E1E1E', padding: { xs: '20px', md: '34px' }, borderRadius: '15px', overflow: { md: 'hidden', sm: 'scroll', xs: 'scroll' } }}>
      {/* Tabs Section */}
      <Tabs
        value={activeTab}
        onChange={handleChange}
        centered={!isMobile} // Center on larger screens, scrollable on mobile
        variant={isMobile ? 'scrollable' : 'standard'} // Enable scrolling on mobile
        scrollButtons={isMobile ? 'auto' : false} // Show scroll buttons only on mobile
        TabIndicatorProps={{
          style: {
            display: 'none', // Hide the default indicator
          },
        }}
        sx={{
          backgroundColor: '#3E3E3E',
          padding: '8px',
          borderRadius: '15px',
          '& .MuiTabs-flexContainer': { justifyContent: { xs: 'center', md: 'space-between' } }, // Center tabs on mobile
          '& .MuiTab-root': {
            fontFamily: 'FilsonPro',
            fontSize: { xs: '12px', md: '17px' }, // Responsive font size
            padding: { xs: '10px 15px', md: '20px 65px' }, // Adjust padding based on screen size
            color: '#fff',
            textTransform: 'none',
            borderRadius: '10px',
            whiteSpace: 'nowrap', // Prevent tabs from breaking into multiple lines
            '&.Mui-selected': {
              backgroundColor: '#FFC800',
              color: '#fff',
            },
          },
        }}
      >
        {dataTab.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {/* Tab Content Section */}
      <Box sx={{ padding: { xs: '10px', md: '20px' }, marginTop: { xs: '10px', md: '20px' } }}>
        <TabContent
          title={dataTab[activeTab].label + ' Animation'}
          description={dataTab[activeTab].content}
          imageSrc={dataTab[activeTab].imageSrc}
        />
      </Box>
    </Box>
  );
};

export default AnimationTabs;
