import { Box, Typography } from "@mui/material";

const BackingOptionsCard = ({ 
  title, 
  description, 
  cardStyle = {},
  titleStyle = {},
  descriptionStyle = {},
  ...otherProps 
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "24px",
        paddingBottom:"60px",
        boxShadow: " 0px 31px 62.2px -12px #00000014",
        // height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
        },
        ...cardStyle,
      }}
      {...otherProps}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          fontSize: { xs: "18px", md: "25px" },
          color: "#1E1E1E",
          fontFamily: "'Bakbak One', sans-serif",
          marginBottom: "16px",
          lineHeight: "1.3",
          ...titleStyle,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "14px", md: "16px" },
          color: "#939393",
          lineHeight: "1.6",
          flex: 1,
          ...descriptionStyle,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default BackingOptionsCard; 