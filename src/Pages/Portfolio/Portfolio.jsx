import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";





import PortfolioTab from "../../Components/PortfolioTab";
import {
  animateScroll as scroll,

} from "react-scroll";

const Portfolio = () => {
  const { setYellowText, setBlackText } = useOutletContext();


  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo();
    setBlackText("Our");
    setYellowText("Portfolio");
  }, []);


  return (
    <>
      <PortfolioTab />
    </>
  );
};

export default Portfolio;
