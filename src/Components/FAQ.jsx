import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import arrowRight from "../image/arrowRight.svg"; // Right arrow
import arrowDown from "../image/arrowDown.svg"; // Down arrow (when opened)

const FAQ = ({ sxFAQ = "", faqData }) => {
  const [expanded, setExpanded] = useState(false);
console.log("expanded", expanded);

  const handleChange = (panel) => ( isExpanded) => {

    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
    sx={{

          display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // 1 column on xs, 2 on md+
        gap: { xs: "10px", md: "0" },
    }}
    >
    <Box
      sx={{
        marginTop: { md: "73px", xs: "45px" },
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: { xs: 'center', md: 'space-between' },
        // display: "grid",
        // gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // 1 column on xs, 2 on md+
        // gap: { xs: "10px", md: "0" },
        // marginBottom: { md: "73px", xs: "30px" },
      }}
    >
      {faqData.slice(0,2).map((item, index) => (
        <Accordion
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`)}
          sx={{
            boxShadow: "none",
            display: "inline-block",
            verticalAlign: "top",
            borderBottom: "1px solid #e0e0e0",
            "&:before": { display: "none" },
          }} // Remove default shadow
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${item.id}` ? (
                <img src={arrowDown} alt="down arrow" />
              ) : (
                <img src={arrowRight} alt="right arrow" />
              )
            }
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            sx={{
              display: "flex",
              alignItems: "center",
              paddingY: { xs: "10px", md: "37px" }, // Adjust padding for small screens
              backgroundColor: expanded === `panel${item.id}` ? "#fff" : "#fff",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#DEDEDE",
                  marginRight: "15px",
                  fontFamily: "satoshi",
                  fontSize: { xs: "18px", md: "25px" }, // Responsive font size
                  lineHeight: "34.25px",
                }}
              >
                0{index + 1}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#161616",
                  fontSize: { xs: "14px", md: "18px" }, // Responsive font size
                  fontFamily: '"Bakbak One", sans-serif',
                }}
              >
                {item.question}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails style={{}}>
            <Typography
              sx={{
                color: "#939393",
                paddingLeft: { xs: "20px", md: "40px" }, // Adjust padding for small screens
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: { xs: "28px", md: "36px" }, // Responsive line height
                fontSize: { xs: "14px", md: "16px" }, // Responsive font size
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
        <Box
      sx={{
        marginTop: { md: "73px", xs: "45px" },
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: { xs: 'center', md: 'space-between' },
        // display: "grid",
        // gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // 1 column on xs, 2 on md+
        // gap: { xs: "10px", md: "0" },
        // marginBottom: { md: "73px", xs: "30px" },
      }}
    >
      {faqData.slice(2,4).map((item, index) => (
        <Accordion
          expanded={expanded === `panel2${item.id}`}
          onChange={handleChange(`panel2${item.id}`)}
          sx={{
            boxShadow: "none",
            display: "inline-block",
            verticalAlign: "top",
            borderBottom: "1px solid #e0e0e0",
            "&:before": { display: "none" },
          }} // Remove default shadow
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel2${item.id}` ? (
                <img src={arrowDown} alt="down arrow" />
              ) : (
                <img src={arrowRight} alt="right arrow" />
              )
            }
            aria-controls={`panel2${item.id}-content`}
            id={`panel2${item.id}-header`}
            sx={{
              display: "flex",
              alignItems: "center",
              paddingY: { xs: "10px", md: "37px" }, // Adjust padding for small screens
              backgroundColor: expanded === `panel2${item.id}` ? "#fff" : "#fff",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#DEDEDE",
                  marginRight: "15px",
                  fontFamily: "satoshi",
                  fontSize: { xs: "18px", md: "25px" }, // Responsive font size
                  lineHeight: "34.25px",
                }}
              >
                0{index + 1}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#161616",
                  fontSize: { xs: "14px", md: "18px" }, // Responsive font size
                  fontFamily: '"Bakbak One", sans-serif',
                }}
              >
                {item.question}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails style={{}}>
            <Typography
              sx={{
                color: "#939393",
                paddingLeft: { xs: "20px", md: "40px" }, // Adjust padding for small screens
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: { xs: "28px", md: "36px" }, // Responsive line height
                fontSize: { xs: "14px", md: "16px" }, // Responsive font size
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
    </Box>
  );
};

export default FAQ;
