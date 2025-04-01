import { useState } from "react";
import arrowButton from "../assets/font/arrowButton.png";
import arrowButtonBlack from "../assets/font/arrowButtonBlack.png";

import { Box, Button } from "@mui/material";

function CustomButton({
  title = "",
  isDisabled = false,
  link = "/",
  buttonStyle = {},
  textStyle = {},
  svgStyle = {},
  svgColor = "white",
  button = true,
  buttonIconBlack = false,
  onClick,
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Button
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      sx={{
        ...textStyle,
        ...buttonStyle,
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        minWidth: "155px",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {title}
      <Box
        sx={{
          transition: "transform 0.5s",
          transform: isMouseOver ? "rotate(45deg)" : "rotate(0deg)", // Rotate on hover
        }}
      >
        <img
          src={buttonIconBlack ? arrowButtonBlack : arrowButton}
          alt="Arrow Button"
          style={{
            width: "22px",
            height: "22px",
            transition: "transform 0.5s", // Smooth transition
          }}
        />
      </Box>
    </Button>
  );
}

export default CustomButton;
