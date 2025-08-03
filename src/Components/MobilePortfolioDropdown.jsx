import React from "react";
import { Box, FormControl, Select, MenuItem } from "@mui/material";

const MobilePortfolioDropdown = ({ tab, setTab }) => {
  const categories = [
    "All",
    "Digitizing",
    "Vector",
    "Embroidery",
    "Leather",
    "Sublimation",
    "Chenille",
  ];

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        justifyContent: "center",
        marginBottom: "40px",
        backgroundColor: "#F7F7F7",
        padding: "19px 10px",
        borderRadius: "20px",
        width: "100%",
      }}
    >
      <FormControl sx={{ minWidth: 250, width: "100%" }}>
        <Select
          value={tab}
          onChange={(e) => setTab(e.target.value)}
          displayEmpty
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
            color: "#939393",
            backgroundColor: "#fff",
            borderRadius: "15px",
            height: "61px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-select": {
              padding: "16px 20px",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 400,
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#fff",
                borderRadius: "15px",
                marginTop: "8px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                "& .MuiMenuItem-root": {
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#939393",
                  padding: "16px 20px",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#000",
                    color: "#fff",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#000",
                    },
                  },
                },
              },
            },
          }}
        >
          {categories.map((category) => (
            <MenuItem
              key={category}
              value={category}
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
                color: "#939393",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                "&.Mui-selected": {
                  backgroundColor: "#000",
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#000",
                  },
                },
              }}
            >
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MobilePortfolioDropdown; 