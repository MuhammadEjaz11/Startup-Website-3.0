import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import CustomButtonMe from "../../Components/CustomButtomMe";
import PortfolioCardCustom from "../../Components/PortfolioCustomCard";
import gym1 from "../../assets/font/gym1.png";
import gym2 from '../../assets/font/img2.png';
import gym3 from '../../assets/font/img3.png';
import gym4 from '../../assets/font/img4.png';
import gym5 from '../../assets/font/img5.png';
import gym6 from '../../assets/font/img6.png';
import gym7 from '../../assets/font/img7.png';
import gym8 from '../../assets/font/img8.png';
import gym9 from '../../assets/font/img9.png';
import CustomButton from "../../Components/Button";


// web dev
import web1 from "../../assets/font/WebDevelopment/1.jpg";
import web2 from "../../assets/font/WebDevelopment/2.jpg";
import web3 from "../../assets/font/WebDevelopment/3.jpg";
import web4 from "../../assets/font/WebDevelopment/4.jpg";
import web5 from "../../assets/font/WebDevelopment/5.jpg";
import web6 from "../../assets/font/WebDevelopment/6.jpg";
import web7 from "../../assets/font/WebDevelopment/7.jpg";
import web8 from "../../assets/font/WebDevelopment/8.jpg";
import web9 from "../../assets/font/WebDevelopment/9.jpg";


import logo1 from "../../assets/font/Logo/l1.jpg";
import logo2 from "../../assets/font/Logo/l2.jpg";
import logo3 from "../../assets/font/Logo/l3.jpg";
import logo4 from "../../assets/font/Logo/l4.jpg";
import logo5 from "../../assets/font/Logo/l5.jpg";
import logo6 from "../../assets/font/Logo/l6.jpg";
import logo7 from "../../assets/font/Logo/l7.jpg";
import logo8 from "../../assets/font/Logo/l8.jpg";
import logo9 from "../../assets/font/Logo/l9.jpg";




import vid1 from "../../assets/font/VideoEditing/v1.jpg";
import vid2 from "../../assets/font/VideoEditing/v2.jpg";
import vid3 from "../../assets/font/VideoEditing/v3.jpg";
import vid4 from "../../assets/font/VideoEditing/v4.jpg";
import vid5 from "../../assets/font/VideoEditing/v5.jpg";
import vid6 from "../../assets/font/VideoEditing/v6.jpg";
import vid7 from "../../assets/font/VideoEditing/v7.jpg";
import vid8 from "../../assets/font/VideoEditing/v8.jpg";
import vid9 from "../../assets/font/VideoEditing/v9.jpg";

import stat1 from "../../assets/font/Stationary/s1.jpg";
import stat2 from "../../assets/font/Stationary/s2.jpg";
import stat3 from "../../assets/font/Stationary/s3.jpg";
import stat4 from "../../assets/font/Stationary/s4.jpg";
import stat5 from "../../assets/font/Stationary/s5.jpg";
import stat6 from "../../assets/font/Stationary/s6.jpg";
import stat7 from "../../assets/font/Stationary/s7.jpg";
import stat8 from "../../assets/font/Stationary/s8.jpg";
import stat9 from "../../assets/font/Stationary/s9.jpg";

import digital1 from '../../assets/font/DigitalMarketing/d1.jpg'
import digital2 from '../../assets/font/DigitalMarketing/d2.jpg'
import digital3 from '../../assets/font/DigitalMarketing/d3.jpg'
import digital4 from '../../assets/font/DigitalMarketing/d4.jpg'
import digital5 from '../../assets/font/DigitalMarketing/d5.jpg'
import digital6 from '../../assets/font/DigitalMarketing/d6.jpg'
import digital7 from '../../assets/font/DigitalMarketing/d7.jpg'
import digital8 from '../../assets/font/DigitalMarketing/d8.jpg'
import digital9 from '../../assets/font/DigitalMarketing/d9.jpg'

const Portfolio = () => {
  const { setYellowText, setBlackText } = useOutletContext();
  const webDevList = [
    { imageURL: web1, title: "Website Project 1", desc: "Web Development", category: "Website" },
      { imageURL: web2, title: "Website Project 2", desc: "Web Development", category: "Website" },
      { imageURL: web3, title: "Website Project 3", desc: "Web Development", category: "Website" },
      { imageURL: web4, title: "Website Project 4", desc: "Web Development", category: "Website" },
      { imageURL: web5, title: "Website Project 5", desc: "Web Development", category: "Website" },
      { imageURL: web6, title: "Website Project 6", desc: "Web Development", category: "Website" },
      { imageURL: web7, title: "Website Project 7", desc: "Web Development", category: "Website" },
      { imageURL: web8, title: "Website Project 8", desc: "Web Development", category: "Website" },
      { imageURL: web9, title: "Website Project 9", desc: "Web Development", category: "Website" },
  
  ]

  useEffect(() => {
    setBlackText("Our");
    setYellowText("Portfolio");
  }, []);

  // Portfolio data arrays for each tab
  const initialMobileApps = [
    { img: stat1, title: "Gym App", description: "Mobile app for gym management.", readmore: "read more" },
    { img: stat2, title: "Fitness Tracker", description: "Mobile fitness tracking app.", readmore: "read more" },
    { img: stat3, title: "Workout Planner", description: "Workout planning mobile app.", readmore: "read more" },
    { img: stat4, title: "Gym App", description: "Mobile app for gym management.", readmore: "read more" },
    { img: stat5, title: "Fitness Blog", description: "Web blog for fitness and health.", readmore: "read more" },
    { img: stat6, title: "Nutrition Tracker", description: "Web-based nutrition tracking app.", readmore: "read more" },
  
    
  ];

  const initialWebDevelopment = [
    { img: web1, title: "Web Design", description: "Web platform for Beauty.", readmore: "read more" },
    { img: web2, title: "Book Store", description: "Web blog for Book Store.", readmore: "read more" },
    { img: web3, title: "Dahlia", description: "Web Platform for Dahlia.", readmore: "read more" },
    { img: web4, title: "White Tail", description: "Web platform for WhiteTail.", readmore: "read more" },
    { img: web5, title: "Intrment Buy", description: "Web app for Instrument Buy.", readmore: "read more" },
    { img: web6, title: "Book Search", description: "Web Platform for Book Search.", readmore: "read more" },


  ];

  const initialLogoDesign = [
    { img: logo1, title: "C", description: "Logo design.", readmore: "read more" },
    { img: logo2, title: "Chat Cat", description: "chat cat logo design.", readmore: "read more" },
    { img: logo3, title: "ShopHappy", description: "Shop Happy logo design.", readmore: "read more" },
    { img: logo4, title: "Fresh Lemon", description: "Fresh Lemon logo design.", readmore: "read more" },
    { img: logo5, title: "Wood Lake", description: "Wood Lake logo design.", readmore: "read more" },
    { img: logo6, title: "Gobel Bag", description: "Gobel Bag logo design.", readmore: "read more" },

  ];

  const initialVideoEditing = [
    { img: vid1, title: "Workout Video", description: "Video editing for workout series.", readmore: "read more" },
    { img: vid2, title: "Fitness Tips", description: "Video editing for fitness tutorials.", readmore: "read more" },
    { img: vid3, title: "Gym Promo", description: "Promo video editing for gym.", readmore: "read more" },
    { img: vid4, title: "Workout Video", description: "Video editing for workout series.", readmore: "read more" },
    { img: vid5, title: "Gym Web", description: "Web platform for gym management.", readmore: "read more" },
    { img: vid6, title: "Fitness Blog", description: "Web blog for fitness and health.", readmore: "read more" },

  ];
  const initialDigital = [
    { img: digital1, title: "Workout Video", description: "Video editing for workout series.", readmore: "read more" },
    { img: digital2, title: "Fitness Tips", description: "Video editing for fitness tutorials.", readmore: "read more" },
    { img: digital3, title: "Gym Promo", description: "Promo video editing for gym.", readmore: "read more" },
    { img: digital4, title: "Workout Video", description: "Video editing for workout series.", readmore: "read more" },
    { img: digital5, title: "Gym Web", description: "Web platform for gym management.", readmore: "read more" },
    { img: digital6, title: "Fitness Blog", description: "Web blog for fitness and health.", readmore: "read more" },

  ];

  // State to manage current tab
  const [currentTab, setCurrentTab] = useState("mobileApps");

  // State to manage content for each tab with initial data
  const [mobileApps, setMobileApps] = useState(initialMobileApps);
  const [webDevelopment, setWebDevelopment] = useState(initialWebDevelopment);
  const [logoDesign, setLogoDesign] = useState(initialLogoDesign);
  const [videoEditing, setVideoEditing] = useState(initialVideoEditing);
  const [digitalMarketing, setDigitalMarketing] = useState(initialDigital);



    // Sample additional content for load more feature
    const additionalContent = {
      mobileApps: [
        { img: stat7, title: "Gym Web", description: "Web platform for gym management.", readmore: "read more" },
        { img: stat8, title: "Gym App", description: "Mobile app for gym management.", readmore: "read more" },
        { img: stat9, title: "Fitness Blog", description: "Web blog for fitness and health.", readmore: "read more" },
      ],
      webDevelopment: [
        { img: web7, title: "Clothing Brand", description: "Web Platform for Clothing Brand.", readmore: "read more" },
        { img: web8, title: "Decoration", description: "Web Platform for Decoration.", readmore: "read more" },
        { img: web9, title: "Travel Agency", description: "Web Platform for Travel Agency.", readmore: "read more" },
      ],
      logoDesign: [
        { img: logo7, title: "Food Spot", description: "Food Spot.", readmore: "read more" },
        { img: logo8, title: "Gym Web", description: "Web platform logo design", readmore: "read more" },
        { img: logo9, title: "Gym App", description: "Mobile app logo design.", readmore: "read more" },
      ],
      videoEditing: [
        { img: vid7, title: "Nutrition Tracker", description: "Web-based nutrition tracking app.", readmore: "read more" },
        { img: vid8, title: "Work", description: "Web platform for gym management.", readmore: "read more" },
        { img: vid9, title: "Teacher", description: "Mobile app for gym management.", readmore: "read more" },
      ],
      initialDigital : [
        { img: digital7, title: "Workout Video", description: "Video editing for workout series.", readmore: "read more" },
        { img: digital8, title: "Gym Web", description: "Web platform for gym management.", readmore: "read more" },
        { img: digital9, title: "Fitness Blog", description: "Web blog for fitness and health.", readmore: "read more" },
      ]
    };

  // Function to get content based on the current tab
  const getCurrentContent = () => {
    switch (currentTab) {
      case "mobileApps":
        return mobileApps;
      case "webDevelopment":
        return webDevelopment;
      case "logoDesign":
        return logoDesign;
      case "videoEditing":
        return videoEditing;
        case "digitalMarketing":
          return digitalMarketing
      default:
        return mobileApps;
    }
  };

  // Function to handle loading more content
  const handleLoadMore = () => {
    // const additionalContent = getCurrentContent(); // Get current tab content

    switch (currentTab) {
      case "mobileApps":
        setMobileApps((prevContent) => [...prevContent, ...additionalContent.mobileApps]);
        break;
      case "webDevelopment":
        setWebDevelopment((prevContent) =>  [...prevContent, ...additionalContent.webDevelopment]);
        break;
      case "logoDesign":
        setLogoDesign((prevContent) => [...prevContent, ...additionalContent.logoDesign]);
        break;
      case "videoEditing":
        setVideoEditing((prevContent) =>  [...prevContent, ...additionalContent.videoEditing]);
        break;
        case "digitalMarketing" :
          setDigitalMarketing((prevContent) =>  [...prevContent, ...additionalContent.initialDigital])
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
              width: { md: "193px", xs: "45%" },
            }}
            height="62px"
            width={"193px"}
            border="1px solid #D7D7D7"
            borderRadius="15px"
            background={currentTab === "webDevelopment" ? "#1E1E1E" : "transparent"}
            color={currentTab === "webDevelopment" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Web Development"
            onClick={() => setCurrentTab("webDevelopment")}
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
            background={currentTab === "logoDesign" ? "#1E1E1E" : "transparent"}
            color={currentTab === "logoDesign" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Logo Design"
            onClick={() => setCurrentTab("logoDesign")}
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
            background={currentTab === "videoEditing" ? "#1E1E1E" : "transparent"}
            color={currentTab === "videoEditing" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Video Editing"
            onClick={() => setCurrentTab("videoEditing")}
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
            background={currentTab === "mobileApps" ? "#1E1E1E" : "transparent"}
            color={currentTab === "mobileApps" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Stationary"
            onClick={() => setCurrentTab("mobileApps")}
          />
         
         
          
           <CustomButtonMe
            buttonStyle={{
              fontSize: { md: "16px", xs: "12px" },
              width: { md: "193px", xs: "45%" },
            }}
            height="62px"
            width={"203px"}
            border="1px solid #D7D7D7"
            borderRadius="15px"
            background={currentTab === "digitalMarketing" ? "#1E1E1E" : "transparent"}
            color={currentTab === "digitalMarketing" ? "#FFFFFF" : "#1E1E1E"}
            ButtonText="Digital Marketing"
            onClick={() => setCurrentTab("digitalMarketing")}
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

export default Portfolio;
