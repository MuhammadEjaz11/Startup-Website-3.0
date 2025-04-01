import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const faqData = [
  {
    id: 1,
    question: "Real Estate",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
  },
  {
    id: 2,
    question: "Ecommerce",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 3,
    question: "Logistics",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 4,
    question: "Automotive",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 5,
    question: "Entertainment",
    answer: "Lorem Ipsum"
  },
  {
    id: 6,
    question: "Education",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
];

const SolutionFAQ = ({
  sxFAQ = '',
  faqPropData
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        marginTop: { md: '73px', xs: '45px' },

        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', md: 'space-between' },
        gap: { xs: '10px', md: '0' } // Adds space between items for small screens
      }}
    >
      {faqPropData.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            flex: { xs: '0 1 100%', md: '0 1 100%' }, // Full width on small screens, 49% on medium and above
            marginBottom: '20px',
            borderBottom: '1px solid #ACACAC42',
          }}
        >
          <Accordion
            expanded={expanded === `panel${item.id}`}
            onChange={handleChange(`panel${item.id}`)}
            sx={{ boxShadow: 'none', backgroundColor: "transparent" }}
          >
            <AccordionSummary
              expandIcon={expanded === `panel${item.id}` ? <ExpandMoreIcon sx={{ color: '#FFA500' }} /> : <ArrowForwardIosIcon sx={{ color: '#FFA500' }} />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: { xs: '10px', md: '15px' }, // Adjust padding for small screens
                backgroundColor: '',
                //  border:"2px solid red"
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', backgroundColor: 'transparent !important', }}>
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

export default SolutionFAQ;
