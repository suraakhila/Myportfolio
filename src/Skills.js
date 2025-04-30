import React from 'react';
import './Skills.css';
import Footer from "./Footer";
import styled, { keyframes } from 'styled-components'; 
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiGit,
  SiMysql,
  SiMongodb
} from 'react-icons/si';
import { FaLinux, FaJava } from 'react-icons/fa';

const skillsData = [
  { name: 'Java', icon: <FaJava />, url: 'https://www.java.com/' },
  { name: 'Python', icon: <SiPython />, url: 'https://www.python.org/' },
  { name: 'HTML5', icon: <SiHtml5 />, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', icon: <SiCss3 />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: <SiJavascript />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', icon: <SiReact />, url: 'https://reactjs.org/' },
  { name: 'Node.js', icon: <SiNodedotjs />, url: 'https://nodejs.org/' },
  { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.mongodb.com/' },
  { name: 'Mysql', icon: <SiMysql />, url: 'https://www.mysql.com/' },
  { name: 'Git', icon: <SiGit />, url: 'https://git-scm.com/' },
  { name: 'Linux', icon: <FaLinux />, url: 'https://www.linux.org/' },
];
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
  
    
const Skills = ({ darkMode }) => {
  return (
    <div className={`skills-wrapper ${darkMode ? 'dark' : 'light'}`}>
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
      <div className="skills-card">
        <h2 className="skills-title">Technologies & Skills</h2>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card"
              key={index}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </a>
          ))}
        </div>
        <Footer darkMode={darkMode}/>
      </div>
      
    </div>
  );
};

export default Skills;
