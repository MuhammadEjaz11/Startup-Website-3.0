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
  const [isOpen, setisOpen] = useState(false);
  const [expanded, setExpanded] = useState([]);

  const handleChange = (panel) => (isExpanded) => {
    console.log("isExpanded", isExpanded);

    setisOpen(!isOpen);
    // setExpanded(isExpanded ? panel : false);
    setExpanded(
      (prev) =>
        isExpanded
          ? [...prev, panel] // Add panel to expanded
          : prev.filter((p) => p !== panel) // Remove panel from expanded
    );
  };
const half = Math.ceil(faqData.length / 2);
const firstHalf = faqData.slice(0, half);
const secondHalf = faqData.slice(half);
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
 
        }}
      >
        {firstHalf.map((item, index) => {
          const isExpandedVal = `panel1${item.id}${index + 1}`;
          const isOpenP1 = expanded.includes(isExpandedVal);

          return (
            <Accordion
              expanded={isOpenP1}
              onChange={(e, isExpanded) =>
                handleChange(isExpandedVal)(isExpanded)
              }
              // expanded={expanded === `panel${item.id}`}
              // onChange={handleChange(`panel${item.id}`)}
              sx={{
                boxShadow: "none",
                // display: "inline-block",
                verticalAlign: "top",
                borderBottom: "1px solid #e0e0e0",
                "&:before": { display: "none" },
              }} // Remove default shadow
            >
              <AccordionSummary
                expandIcon={
                  isOpenP1 ? (
                    <img src={arrowDown} alt="down arrow" />
                  ) : (
                    <img src={arrowRight} alt="right arrow" />
                  )
                }
                aria-controls={`${isExpandedVal}-content`}
                id={`${isExpandedVal}-header`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingY: { xs: "10px", md: "37px" }, // Adjust padding for small screens
                  backgroundColor: isOpenP1 ? "#fff" : "#fff",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
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
          );
        })}
      </Box>
      <Box
        sx={{
          marginTop: { md: "73px", xs: "45px" },
        }}
      >
        {secondHalf.map((item, index) => {
            const number = half + index + 1;
          const isExpandedVal = `panel2${item.id}${index + 1}`;
          const isOpenP1 = expanded.includes(isExpandedVal);

          return (
            <Accordion
              expanded={isOpenP1}
              onChange={(e, isExpanded) =>
                handleChange(isExpandedVal)(isExpanded)
              }

              sx={{
                boxShadow: "none",
                // display: "inline-block",
                verticalAlign: "top",
                borderBottom: "1px solid #e0e0e0",
                "&:before": { display: "none" },
              }} // Remove default shadow
            >
              <AccordionSummary
                expandIcon={
                  isOpenP1 ? (
                    <img src={arrowDown} alt="down arrow" />
                  ) : (
                    <img src={arrowRight} alt="right arrow" />
                  )
                }
                aria-controls={`${isExpandedVal}-content`}
                id={`${isExpandedVal}-header`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingY: { xs: "10px", md: "37px" }, // Adjust padding for small screens
                  backgroundColor: isOpenP1 ? "#fff" : "#fff",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
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
                    0{number}
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
          );
        })}
      </Box>
    </Box>
  );
};

export default FAQ;
