import React from "react";

const PortfolioCard = ({ imageURL, title, desc }) => {
  return (
    <div style={{ padding: "10px", position: "relative", }}>
      <img src={imageURL} alt={title} style={{ width: "100%", borderRadius: "10px", }} />
      <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "#fff" }}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
