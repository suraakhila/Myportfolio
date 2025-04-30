import React from "react";
import { ReactTyped } from "react-typed";
import Footer from "./Footer";
import "./Home.css"; // Link to your custom CSS
import styled, { keyframes } from 'styled-components'; 
const BackgroundAnimation = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    `;
  
    const moveStars = keyframes`
      0% {
        transform: translateY(0px) scale(1);
        opacity: 0.8;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) scale(0.5);
        opacity: 0;
      }
    `;
  
    const Dot = styled.div`
      position: absolute;
      background-color: ${(props) => (props.darkMode ? 'white' : '#a97882')};
      border-radius: 50%;
      opacity: 0.7;
      animation: ${moveStars} linear infinite;
    `;
  
    
const Home = ({ darkMode }) => {
  return (
 
    <div className={`home-wrapper ${darkMode ? "dark" : "light"}`}>
      <BackgroundAnimation>
        {Array.from({ length: 130 }).map((_, i) => {
          const top = `${Math.random() * 100}%`;
          const left = `${Math.random() * 100}%`;
          const duration = `${10 + Math.random() * 10}s`;
          const delay = `${Math.random() * 10}s`;
          const size = `${2 + Math.random() * 0.5}px`;
          return (
            <Dot
              key={i}
              darkMode={darkMode}
              style={{
                top,
                left,
                animationDuration: duration,
                animationDelay: delay,
                width: size,
                height: size,
              }}
            />
          );
        })}
      </BackgroundAnimation>
      <div className="home-card">
        <img
          src="https://img.freepik.com/free-vector/young-black-woman-sitting-floor-working-laptop-freelance-remote-working-online-studying-work-from-home-flat-style-vector-illustration_285336-2361.jpg?size=338&ext=jpg"
          alt="Profile"
          className="profile-img"
        />
        <h1 className="name-title">Hi, I'm Sura Akhila</h1>

        <ReactTyped
          strings={["Full Stack Developer", "Frontend Developer.", "Backend Developer"]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="typed-text"
        />

        <p className="intro">
        Hello and welcome to my professional portfolio!
        I'm a passionate full stack web developer who builds dynamic and user-friendly web applications.
        </p>

        <div className="button-group">
          <a href="mailto:suraakhila9@gmail.com" className="btn primary">📧 Contact Me</a>
          <a href="https://www.linkedin.com/in/sura-akhila-955787258/" className="btn outline" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          <a href="\Resume2025.doc" download className="btn pink">📄 Download Resume</a>
        </div>
        <Footer darkMode={darkMode}/>
      </div>
      
    </div>

  );
};

export default Home;
