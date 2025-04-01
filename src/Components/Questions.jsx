import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import StyledHeading from "./StyledHeading";

const questions = [
  {
    id: 1,
    title: "Q1. Mobile App Market Revenue & Growth",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Q2. Popular Mobile App Development Frameworks",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.",
  },
  {
    id: 3,
    title: "Q3. Mobile App Development Trends In 2024",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    title: "Q4. Common Mistakes During App Development",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
];

const Questions = ({ questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        width: "100%",
        flexDirection: { md: "row", xs: "column" },
        mt: "20px",
        border: "1px solid #DDDDDDF1",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* Left Side: Questions */}
      <Box
        sx={{
          flexBasis: "50%",
          maxWidth: { md: "50%", xs: "100%" },
          backgroundColor: "#212121",
          color: "#fff",
          p: "40px",
        }}
      >
        <List>
          {questions.map((question) => (
            <ListItemButton
              key={question.id}
              onClick={() => setSelectedQuestion(question)}
              sx={{
                mb: "1rem",
                borderRadius: "8px",
                backgroundColor:
                  selectedQuestion.id === question.id ? "#333" : "transparent",
                color: "#fff",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                
                fontFamily: "Satoshi !important",
               
                
              }}
            >
              <ListItemText
                primaryTypographyProps={{ fontSize: {xl:"18px", md:"14px", xs:"16px"}, fontWeight: "700",   fontFamily: "Satoshi !important" }}
              >
                {question.title}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Right Side: Selected Question Content */}
      <Box
        sx={{
          flexBasis: "50%",
          maxWidth: { md: "50%", xs: "100%" },
          p: "40px 20px",
        }}
      >
        <StyledHeading
          title1={selectedQuestion.title.slice(3)}
                
          sx1={{ fontSize: "21px", fontWeight: "700",fontFamily: "Satoshi !important"  }}
        />
        <Typography
          sx={{
            color: "#939393",
            fontSize: {xl:"16px", md:"14px", xs:"16px"},
            fontFamily: "Inter",
            lineHeight: "36px",
            mt: "10px",
            fontWeight: "400",
           
          }}
        >
          {selectedQuestion.content}
        </Typography>
        {/* <Typography
          sx={{
            color: "#939393",
            fontSize: {xl:"16px", md:"14px", xs:"16px"},
            fontFamily: "Inter",
            lineHeight: "36px",
            mt: "10px",
            fontWeight: "400",
           
          }}
        >
          {selectedQuestion.content}
        </Typography> */}
          
      </Box>
    </Box>
  );
};

export default Questions;
