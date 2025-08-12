import { Box, Typography } from "@mui/material";
import React from "react";

const StyledHeading = ({
  sx = {},
  sx1 = {},
  sx2 = {},
  title1 = "",
  title2 = "",
  title3 = "",
  styledSx = "",
  titleSpan2,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { md: "left", sm: "left", xs: "left" },
        textTransform: "capitalize",

        flexWrap: "wrap",
        gap: { xs: "10px", sm: "05px", md: "5px", xl: "10px" }, // Responsive gap

        ...sx,
        ...styledSx,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "30px", xl: "50px" }, // Responsive font size for title1
          fontFamily: "satoshi-light",
          lineHeight: "1.2",
          ...sx1,
        }}
      >
        {title1}

        {titleSpan2 && (
          <Box
            component={"span"}
            sx={{
              fontFamily: "'Bakbak One', sans-serif",
              fontSize: { xl: "50px", md: "35px" },
              ml: "10px",
              fontWeight: 500,
              lineHeight: { xl: "67.5px", md: "45px" },
              color: "#1E1E1E",
              textTransform: "capitalize",
            }}
          >
            {titleSpan2}
          </Box>
        )}
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Bakbak One', sans-serif",

          fontWeight: 600,
          fontSize: { xs: "30px", sm: "30px", xl: "50px" }, // Responsive font size for title2
          ...sx2,
          lineHeight: "1.2",
        }}
      >
        {title2}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "30px", sm: "30px", xl: "50px" }, // Responsive font size for title1
          fontFamily: "satoshi-light",
          ...sx1,
          lineHeight: "1.2",
        }}
      >
        {title3}
      </Typography>
    </Box>
  );
};

export default StyledHeading;
