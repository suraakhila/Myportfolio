import React from "react";

const Footer = ({ darkMode }) => {
  const footerStyle = {
    padding: "37px 0",
 // Dark background in dark mode
    color: darkMode ? "#fff" : "#111", // Light text in dark mode
    textAlign: "center",
    fontSize: "14px",
    
    position: "relative",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <div><bold>Copyright © 2025 by Sura Akhila | All Rights Reserved.</bold></div>
    </footer>
  );
};

export default Footer;
