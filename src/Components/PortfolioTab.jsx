import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CustomButtonMe from "./CustomButtomMe";
import PortfolioCardCustom from "./PortfolioCustomCard";
import CustomButton from "./Button";

const PortfolioTab = () => {
  // Portfolio data arrays for each tab using public image paths
  const initialVector = [
    { img: "/images/our-portfolio/vector/one.jpg", title: "Vector Design 1", description: "Professional vector design work.", readmore: "read more" },
    { img: "/images/our-portfolio/vector/two.jpg", title: "Vector Design 2", description: "Creative vector illustration.", readmore: "read more" },
    { img: "/images/our-portfolio/vector/three.jpg", title: "Vector Design 3", description: "Modern vector graphics.", readmore: "read more" },
    { img: "/images/our-portfolio/vector/four.jpg", title: "Vector Design 4", description: "Professional vector artwork.", readmore: "read more" },
    { img: "/images/our-portfolio/vector/five.jpg", title: "Vector Design 5", description: "Creative vector design.", readmore: "read more" },
    { img: "/images/our-portfolio/vector/eight.jpg", title: "Vector Design 6", description: "Modern vector illustration.", readmore: "read more" },
  ];

  const initialEmbroidery = [
    { img: "/images/our-portfolio/embroidery/one.jpg", title: "Embroidery Work 1", description: "Professional embroidery design.", readmore: "read more" },
    { img: "/images/our-portfolio/embroidery/two.jpg", title: "Embroidery Work 2", description: "Creative embroidery pattern.", readmore: "read more" },
    { img: "/images/our-portfolio/embroidery/three.jpg", title: "Embroidery Work 3", description: "Modern embroidery artwork.", readmore: "read more" },
    { img: "/images/our-portfolio/embroidery/four.jpg", title: "Embroidery Work 4", description: "Professional embroidery.", readmore: "read more" },
    { img: "/images/our-portfolio/embroidery/five.jpg", title: "Embroidery Work 5", description: "Creative embroidery design.", readmore: "read more" },
    { img: "/images/our-portfolio/embroidery/eight.jpg", title: "Embroidery Work 6", description: "Modern embroidery pattern.", readmore: "read more" },
  ];

  const initialSublimation = [
    { img: "/images/our-portfolio/sublimation/one.jpg", title: "Sublimation Work 1", description: "Professional sublimation design.", readmore: "read more" },
    { img: "/images/our-portfolio/sublimation/two.jpg", title: "Sublimation Work 2", description: "Creative sublimation pattern.", readmore: "read more" },
    { img: "/images/our-portfolio/sublimation/three.jpg", title: "Sublimation Work 3", description: "Modern sublimation artwork.", readmore: "read more" },
    { img: "/images/our-portfolio/sublimation/four.jpg", title: "Sublimation Work 4", description: "Professional sublimation.", readmore: "read more" },
    { img: "/images/our-portfolio/sublimation/five.jpg", title: "Sublimation Work 5", description: "Creative sublimation design.", readmore: "read more" },
    { img: "/images/our-portfolio/sublimation/eight.jpg", title: "Sublimation Work 6", description: "Modern sublimation pattern.", readmore: "read more" },
  ];

  const initialLeather = [
    { img: "/images/our-portfolio/leather/one.jpg", title: "Leather Work 1", description: "Professional leather design.", readmore: "read more" },
    { img: "/images/our-portfolio/leather/two.jpg", title: "Leather Work 2", description: "Creative leather pattern.", readmore: "read more" },
    { img: "/images/our-portfolio/leather/three.jpg", title: "Leather Work 3", description: "Modern leather artwork.", readmore: "read more" },
    { img: "/images/our-portfolio/leather/four.jpg", title: "Leather Work 4", description: "Professional leather work.", readmore: "read more" },
  ];

  const initialChenille = [
    { img: "/images/our-portfolio/chenille/one.jpg", title: "Chenille Work 1", description: "Professional chenille design.", readmore: "read more" },
    { img: "/images/our-portfolio/chenille/two.jpg", title: "Chenille Work 2", description: "Creative chenille pattern.", readmore: "read more" },
    { img: "/images/our-portfolio/chenille/three.jpg", title: "Chenille Work 3", description: "Modern chenille artwork.", readmore: "read more" },
    { img: "/images/our-portfolio/chenille/four.jpg", title: "Chenille Work 4", description: "Professional chenille work.", readmore: "read more" },
    { img: "/images/our-portfolio/chenille/five.jpg", title: "Chenille Work 5", description: "Creative chenille design.", readmore: "read more" },
    { img: "/images/our-portfolio/chenille/eight.jpg", title: "Chenille Work 6", description: "Modern chenille pattern.", readmore: "read more" },
  ];

  const initialDigitize = [
    { img: "/images/our-portfolio/digitize/one.jpg", title: "Digitizing Work 1", description: "Professional digitizing design.", readmore: "read more" },
    { img: "/images/our-portfolio/digitize/two.jpg", title: "Digitizing Work 2", description: "Creative digitizing pattern.", readmore: "read more" },
    { img: "/images/our-portfolio/digitize/three.jpg", title: "Digitizing Work 3", description: "Modern digitizing artwork.", readmore: "read more" },
    { img: "/images/our-portfolio/digitize/four.jpg", title: "Digitizing Work 4", description: "Professional digitizing work.", readmore: "read more" },
    { img: "/images/our-portfolio/digitize/five.jpg", title: "Digitizing Work 5", description: "Creative digitizing design.", readmore: "read more" },
    { img: "/images/our-portfolio/digitize/eight.jpg", title: "Digitizing Work 6", description: "Modern digitizing pattern.", readmore: "read more" },
  ];

  // State to manage current tab
  const [currentTab, setCurrentTab] = useState("vector");

  // State to manage content for each tab with initial data
  const [vector, setVector] = useState(initialVector);
  const [embroidery, setEmbroidery] = useState(initialEmbroidery);
  const [sublimation, setSublimation] = useState(initialSublimation);
  const [leather, setLeather] = useState(initialLeather);
  const [chenille, setChenille] = useState(initialChenille);
  const [digitize, setDigitize] = useState(initialDigitize);

  // Additional content for load more feature
  const additionalContent = {
    vector: [
      { img: "/images/our-portfolio/vector/one.jpg", title: "Vector Design 7", description: "Additional vector design work.", readmore: "read more" },
      { img: "/images/our-portfolio/vector/two.jpg", title: "Vector Design 8", description: "More creative vector work.", readmore: "read more" },
      { img: "/images/our-portfolio/vector/three.jpg", title: "Vector Design 9", description: "Extended vector collection.", readmore: "read more" },
    ],
    embroidery: [
      { img: "/images/our-portfolio/embroidery/one.jpg", title: "Embroidery Work 7", description: "Additional embroidery work.", readmore: "read more" },
      { img: "/images/our-portfolio/embroidery/two.jpg", title: "Embroidery Work 8", description: "More creative embroidery.", readmore: "read more" },
      { img: "/images/our-portfolio/embroidery/three.jpg", title: "Embroidery Work 9", description: "Extended embroidery collection.", readmore: "read more" },
    ],
    sublimation: [
      { img: "/images/our-portfolio/sublimation/one.jpg", title: "Sublimation Work 7", description: "Additional sublimation work.", readmore: "read more" },
      { img: "/images/our-portfolio/sublimation/two.jpg", title: "Sublimation Work 8", description: "More creative sublimation.", readmore: "read more" },
      { img: "/images/our-portfolio/sublimation/three.jpg", title: "Sublimation Work 9", description: "Extended sublimation collection.", readmore: "read more" },
    ],
    leather: [
      { img: "/images/our-portfolio/leather/one.jpg", title: "Leather Work 5", description: "Additional leather work.", readmore: "read more" },
      { img: "/images/our-portfolio/leather/two.jpg", title: "Leather Work 6", description: "More creative leather work.", readmore: "read more" },
    ],
    chenille: [
      { img: "/images/our-portfolio/chenille/one.jpg", title: "Chenille Work 7", description: "Additional chenille work.", readmore: "read more" },
      { img: "/images/our-portfolio/chenille/two.jpg", title: "Chenille Work 8", description: "More creative chenille work.", readmore: "read more" },
      { img: "/images/our-portfolio/chenille/three.jpg", title: "Chenille Work 9", description: "Extended chenille collection.", readmore: "read more" },
    ],
    digitize: [
      { img: "/images/our-portfolio/digitize/one.jpg", title: "Digitizing Work 7", description: "Additional digitizing work.", readmore: "read more" },
      { img: "/images/our-portfolio/digitize/two.jpg", title: "Digitizing Work 8", description: "More creative digitizing.", readmore: "read more" },
      { img: "/images/our-portfolio/digitize/three.jpg", title: "Digitizing Work 9", description: "Extended digitizing collection.", readmore: "read more" },
    ],
  };

  // Function to get content based on the current tab
  const getCurrentContent = () => {
    switch (currentTab) {
      case "vector":
        return vector;
      case "embroidery":
        return embroidery;
      case "sublimation":
        return sublimation;
      case "leather":
        return leather;
      case "chenille":
        return chenille;
      case "digitize":
        return digitize;
      default:
        return vector;
    }
  };

  // Function to handle loading more content
  const handleLoadMore = () => {
    switch (currentTab) {
      case "vector":
        setVector((prevContent) => [...prevContent, ...additionalContent.vector]);
        break;
      case "embroidery":
        setEmbroidery((prevContent) => [...prevContent, ...additionalContent.embroidery]);
        break;
      case "sublimation":
        setSublimation((prevContent) => [...prevContent, ...additionalContent.sublimation]);
        break;
      case "leather":
        setLeather((prevContent) => [...prevContent, ...additionalContent.leather]);
        break;
      case "chenille":
        setChenille((prevContent) => [...prevContent, ...additionalContent.chenille]);
        break;
      case "digitize":
        setDigitize((prevContent) => [...prevContent, ...additionalContent.digitize]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          paddingTop:  {xl:"130px",md:"30px", xs:"100px"},
          paddingBottom: "130px",
        }}
      >
        {/* Buttons for tabs */}
        <Box sx={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          <CustomButtonMe
            buttonStyle={{
              fontSize: { md: "16px", xs: "12px" },
              width: { md: "140px", xs: "45%" },
            }}
            height="62px"
            width={"140px"}
            border="1px solid #D7D7D7"
            borderRadius="15px"
            background={currentTab === "vector" ? "#1E1E1E" : "transparent"}
            color={currentTab === "vector" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Vector"
            onClick={() => setCurrentTab("vector")}
          />
          <CustomButtonMe
            buttonStyle={{
              fontSize: { md: "16px", xs: "12px" },
              width: { md: "144px", xs: "45%" },
            }}
            height="62px"
            width={"144px"}
            border="1px solid #D7D7D7"
            borderRadius="15px"
            background={currentTab === "embroidery" ? "#1E1E1E" : "transparent"}
            color={currentTab === "embroidery" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Embroidery"
            onClick={() => setCurrentTab("embroidery")}
          />
          <CustomButtonMe
            buttonStyle={{
              fontSize: { md: "16px", xs: "12px" },
              width: { md: "153px", xs: "45%" },
            }}
            height="62px"
            width={"153px"}
            border="1px solid #D7D7D7"
            borderRadius="15px"
            background={currentTab === "sublimation" ? "#1E1E1E" : "transparent"}
            color={currentTab === "sublimation" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Sublimation"
            onClick={() => setCurrentTab("sublimation")}
          />
          <CustomButtonMe
            buttonStyle={{
              fontSize: { md: "16px", xs: "12px" },
              width: { md: "140px", xs: "45%" },
            }}
            height="62px"
            width={"140px"}
            border="1px solid #D7D7D7"
            borderRadius="15px"
            background={currentTab === "leather" ? "#1E1E1E" : "transparent"}
            color={currentTab === "leather" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Leather"
            onClick={() => setCurrentTab("leather")}
          />
          <CustomButtonMe
            buttonStyle={{
              fontSize: { md: "16px", xs: "12px" },
              width: { md: "140px", xs: "45%" },
            }}
            height="62px"
            width={"140px"}
            border="1px solid #D7D7D7"
            borderRadius="15px"
            background={currentTab === "chenille" ? "#1E1E1E" : "transparent"}
            color={currentTab === "chenille" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Chenille"
            onClick={() => setCurrentTab("chenille")}
          />
          <CustomButtonMe
            buttonStyle={{
              fontSize: { md: "16px", xs: "12px" },
              width: { md: "140px", xs: "45%" },
            }}
            height="62px"
            width={"140px"}
            border="1px solid #D7D7D7"
            borderRadius="15px"
            background={currentTab === "digitize" ? "#1E1E1E" : "transparent"}
            color={currentTab === "digitize" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Digitize"
            onClick={() => setCurrentTab("digitize")}
          />
        </Box>

        {/* Portfolio card rendering */}
        <Box
          sx={{
            mt: "70px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { md: "space-between", xs: "center" },
            gap: "1rem",
          }}
        >
          {getCurrentContent().map((item, ind) => (
            <Box
              key={ind}
              sx={{
                flexBasis: {
                  xs: "100%", // 1 card per row on extra small screens
                  sm: "47%",  // 2 cards per row on small screens
                  md: "31%",  // 3 cards per row on medium screens
                },
                flexShrink: "1",
                flexGrow: "1",
              }}
            >
              <PortfolioCardCustom imageURL={item.img} title={item.title} desc={item.description} more={item.readmore} />
            </Box>
          ))}
        </Box>

        {/* Load More button */}
        <Box
          sx={{
            paddingBottom: "0px",
            display: "flex",
            justifyContent: "flex-end",
            mt: "50px",
          }}
        >
          <CustomButton
            svgColor={"black"}
            buttonStyle={{
              fontWeight: 600,
              textTransform: "capitalize",
              color: "white",
              padding: { xs: "15px", md: "20px" },
              marginTop: "20px",
              fontFamily: "Outfit",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "20.16px",
              backgroundColor: "black",
              borderRadius: "10px",
            }}
            title="Load More"
            onClick={handleLoadMore}  
          />
        </Box>
      </Box>
    </>
  );
};

export default PortfolioTab;
