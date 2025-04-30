import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Resize listener for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleButtonStyle = {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1.8rem",
    color: darkMode ? "#f1c40f" : "#333",
    boxShadow: darkMode
      ? "0 0 10px 2px rgba(241, 196, 15, 0.4)"
      : "0 0 10px 2px rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
    padding: "8px",
    transition: "all 0.3s ease",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    height: "70px",
    backdropFilter: "blur(10px)",
    backgroundColor: darkMode ? "rgba(30, 30, 30, 0.8)" : "rgba(255, 255, 255, 0.7)",
    color: darkMode ? "#ffffff" : "#121212",
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
    borderBottom: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    borderRadius: "0 0 20px 20px",
    position: "sticky",
    top: "0",
    zIndex: "1000",
  };

  const linkStyle = ({ isActive }) => ({
    padding: "12px 24px",
    margin: "0 10px",
    borderRadius: "50px",
    textDecoration: "none",
    color: isActive ? "#fff" : darkMode ? "#bbb" : "#333",
    backgroundColor: isActive
      ? darkMode ? "#555" : "#007bff"
      : "transparent",
    fontWeight: isActive ? "bold" : "500",
    transition: "all 0.3s ease",
    fontSize: "16px",
    textTransform: "uppercase",
    boxShadow: isActive
      ? darkMode
        ? "0 4px 12px rgba(0, 0, 0, 0.2)"
        : "0 4px 12px rgba(0, 123, 255, 0.4)"
      : "none",
  });

  const navLinks = (
    <>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/skills" style={linkStyle}>Skills</NavLink>
      <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </>
  );

  return (
    <nav style={navStyle}>
      {/* Logo or Title */}
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        MyPortfolio
      </div>

      {/* Desktop Links */}
      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center" }}>
          {navLinks}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{ ...toggleButtonStyle, marginLeft: "10px" }}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}

      {/* Mobile Icons */}
      {isMobile && (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={toggleButtonStyle}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={toggleButtonStyle}
            title="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && isMobile && (
        <div style={{
          position: "absolute",
          top: "70px",
          right: "0",
          backgroundColor: darkMode ? "#222" : "#fff",
          width: "100%",
          padding: "20px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          zIndex: 999
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
