import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CustomButtonMe from "../../Components/CustomButtomMe";
import PortfolioCardCustom from "../../Components/PortfolioCustomCard";
import gym1 from  "../../assets/font/gym1.png";
import gym2 from '../../assets/font/img2.png';
import gym3 from '../../assets/font/img3.png';
import gym4 from '../../assets/font/img4.png';
import gym5 from '../../assets/font/img5.png';
import gym6 from '../../assets/font/img6.png';
import gym7 from '../../assets/font/img7.png';
import gym8 from '../../assets/font/img8.png';
import gym9 from '../../assets/font/img9.png';

const SolutionPage = () => {
  const { setYellowText, setBlackText } = useOutletContext();

  useEffect(() => {
    setBlackText("Our");
    setYellowText("Portfolio");
  }, []);

  const portfolioContent = [
    { img: gym1, title: "Gym App", description: "Lorem ipsum dolor sit amet consectetur.", readmore: "read more" },
    { img: gym2, title: "Gym App", description: "Lorem ipsum dolor sit amet consectetur.", readmore: "read more" },
    { img: gym3, title: "Gym App", description: "Lorem ipsum dolor sit amet consectetur.", readmore: "read more" },
    { img: gym4, title: "Gym App", description: "Lorem ipsum dolor sit amet consectetur.", readmore: "read more" },
    { img: gym5, title: "Gym App", description: "Lorem ipsum dolor sit amet consectetur.", readmore: "read more" },
    { img: gym6, title: "Gym App", description: "Lorem ipsum dolor sit amet consectetur.", readmore: "read more" },
    { img: gym7, title: "Gym App", description: "Lorem ipsum dolor sit amet consectetur.", readmore: "read more" },
    { img: gym8, title: "Gym App", description: "Lorem ipsum dolor sit amet consectetur.", readmore: "read more" },
    { img: gym9, title: "Gym App", description: "Lorem ipsum dolor sit amet consectetur.", readmore: "read more" },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          
          margin: "0 auto",
          paddingTop: "130px",
          paddingBottom: "130px",
        }}
      >
        {/* 4 buttons */}
        <Box sx={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          <CustomButtonMe height="62px" width={"140px"} border="1px solid #D7D7D7" borderRadius="15px" background=" #1E1E1E" color="#FFFFFF" ButtonText="Mobile Apps" />
          <CustomButtonMe height="62px" width={"193px"} border="1px solid #D7D7D7" borderRadius="15px" color="#1E1E1E" ButtonText="Web Development" />
          <CustomButtonMe height="62px" width={"144px"} border="1px solid #D7D7D7" borderRadius="15px" color="#1E1E1E" ButtonText="Logo Design" />
          <CustomButtonMe height="62px" width={"153px"} border="1px solid #D7D7D7" borderRadius="15px" color="#1E1E1E" ButtonText="Video Editing" />
        </Box>

        {/* Portfolio card rendering */}
        <Box
          sx={{
            mt: "70px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {portfolioContent.map((item, ind) => (
            <Box
              key={ind}
              sx={{
                flexBasis: {
                  xs: "100%", // 1 card per row on extra small screens
                  sm: "47%",  // 2 cards per row on small screens
                  md: "30%",  // 3 cards per row on medium screens
                },
                // marginBottom: "30px",
              }}
            >
              <PortfolioCardCustom imageURL={item.img} title={item.title} desc={item.description} more={item.readmore} />
            </Box>
          ))}
        </Box>

        {/* Load More button */}
        <Box sx={{ mt: "40px", display: "flex", justifyContent: "end" }}>
          <CustomButtonMe height="62px" width={"150px"} border="1px solid #D7D7D7" borderRadius="15px" background=" #1E1E1E" color="#FFFFFF" ButtonText="Load more" />
        </Box>
      </Box>
    </>
  );
};

export default SolutionPage;
