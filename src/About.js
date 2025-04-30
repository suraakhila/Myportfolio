import React from "react";
import "./About.css";
import Footer from "./Footer";
import { FaLaptopCode, FaUserAlt, FaTrophy } from "react-icons/fa";
import styled, { keyframes } from 'styled-components'; // Adding icons for services

const About = ({ darkMode }) => {
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
  
    
  
  return (
    <div className={`about-wrapper ${darkMode ? "dark" : "light"}`}>
      <BackgroundAnimation >
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

      <div className="about-card">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hello! I'm Sura Akhila, a passionate and driven Full Stack Web Developer. With a keen interest in both frontend and backend technologies, I specialize in creating dynamic and responsive web applications. My goal is to craft user-friendly, efficient, and scalable solutions using modern tech stacks.
        </p>
        
        <div className="services-section">
          <div className="service-card">
            <FaLaptopCode size={50} />
            <h3>Frontend Development</h3>
            <p>Creating beautiful, responsive user interfaces with modern frontend frameworks.</p>
          </div>
          <div className="service-card">
            <FaUserAlt size={50} />
            <h3>Backend Development</h3>
            <p>Building strong server-side applications using efficient backend technologies.</p>
          </div>
          <div className="service-card">
            <FaTrophy size={50} />
            <h3>Full Stack Expertise</h3>
            <p>Combining both frontend and backend skills to deliver full-stack solutions.</p>
          </div>
        </div>

        <div className="contact-section">
          <p>If you're interested in working together, feel free to reach out to me!</p>
          <a href="mailto:suraakhila9@gmail.com" className="btn primary">📧 Contact Me</a>
        </div>
        <Footer darkMode={darkMode}/>
      </div>
      
    </div>
  );
};

export default About;
