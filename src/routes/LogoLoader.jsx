import React, { useState, useEffect } from "react";
import AppLogo from "../assets/CompanyLogo.jsx"; // Import the SVG component as default
import "../../src/assets/LogoLoagerAnimation.css";

const LogoLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const logoLoaderStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    transition: "opacity 0.5s",
  };

  const logoStyle = {
    maxWidth: "100%" /* Make the logo width 100% of its container */,
    maxHeight: "100%" /* Make the logo height 100% of its container */,
  };

  if (!isLoading) {
    return null; // Return null to render nothing when not loading
  }

  return (
    <div
      style={logoLoaderStyle}
      className={`logo-loader ${isLoading ? "show" : "hide"}`}
    >
      <AppLogo style={logoStyle} className="logo" />{" "}
      {/* Use the SVG as a component */}
    </div>
  );
};

export default LogoLoader;
