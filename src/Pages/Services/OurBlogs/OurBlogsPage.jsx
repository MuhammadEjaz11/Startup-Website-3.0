import React from "react";
import { Box, Typography } from "@mui/material";
import BlogCardComponent from "../../../Components/BlogCardComponent";
import LatestArticleComponent from "../../../Components/LatestArticleComponent";

const OurBlogsPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: {
            xs:"6rem",
            sm:"5rem",
            lg:"2.5rem"
          },
        //   p: "50px",
          pb:"220px",
          mt:"80px",
          flexDirection:{
            lg:"row",
            xs:"column"
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            flexBasis: "65%",
            gap: "1.5rem",
            // p: "50px",
            // bgcolor: "blue",
          }}
        >
          <LatestArticleComponent />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            flexBasis: "35%",
            gap: "1.5rem",
            // p: "50px",
            // bgcolor: "yellow",
          }}
        >
          <BlogCardComponent />
        </Box>
      </Box>
    </>
  );
};

export default OurBlogsPage;
