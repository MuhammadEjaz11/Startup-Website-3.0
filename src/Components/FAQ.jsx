import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import arrowRight from '../image/arrowRight.png'; // Right arrow
import arrowDown from '../image/arrowDown.png'; // Down arrow (when opened)



const FAQ = ({ sxFAQ = '', faqData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box 
      sx={{
        marginTop: { md: '73px', xs: '45px' }, 
        display: 'flex', 
        marginBottom: { md: '73px', xs: '30px'},
        flexWrap: 'wrap', 
        justifyContent: { xs: 'center', md: 'space-between' },
        gap: { xs: '10px', md: '0' } // Adds space between items for small screens
      }}
    >
      {faqData.map((item, index) => (
        <Box 
          key={item.id} 
          sx={{ 
            flex: { xs: '0 1 100%', md: '0 1 49%' }, // Full width on small screens, 49% on medium and above
            marginBottom: 'px', 
            borderBottom: '1px solid #e0e0e0', 
            borderRadius: '5px', 
            ...sxFAQ
          }}
        >
          <Accordion 
            expanded={expanded === `panel${item.id}`} 
            onChange={handleChange(`panel${item.id}`)}
            sx={{ boxShadow: 'none' }}
          >
            <AccordionSummary
              expandIcon={expanded === `panel${item.id}` ? <img src={arrowDown} alt="down arrow" /> : <img src={arrowRight} alt="right arrow" />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                paddingY: { xs: '10px', md: '37px' }, // Adjust padding for small screens
                backgroundColor: expanded === `panel${item.id}` ? '#fff' : '#fff' 
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#DEDEDE', 
                    marginRight: '15px', 
                    fontFamily: 'satoshi', 
                    fontSize: { xs: '18px', md: '25px' }, // Responsive font size
                    lineHeight: '34.25px',
                  }}
                >
                  0{index + 1}
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#161616', 
                    fontSize: { xs: '14px', md: '18px' }, // Responsive font size
                    fontFamily: 'satoshi',
                  }}
                >
                  {item.question}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
                sx={{ 
                  color: '#939393', 
                  paddingLeft: { xs: '20px', md: '40px' }, // Adjust padding for small screens
                  fontFamily: 'Inter', 
                  fontWeight: '400', 
                  lineHeight: { xs: '28px', md: '36px' }, // Responsive line height
                  fontSize: { xs: '14px', md: '16px' }, // Responsive font size
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default FAQ;
