import React from 'react';
import styled from 'styled-components';
import  { keyframes } from 'styled-components';
const PageNotFound = ({ darkMode }) => {
  const Container = styled.div`
    height: 100vh;
    background: linear-gradient(to bottom right, ${darkMode ? '#2c2c2c' : '#e3f2fd'}, #ffffff, ${darkMode ? '#181818' : '#ffe0ef'}); /* Same gradient as About wrapper */
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${darkMode ? '#fff' : '#111'};
    font-size: 2rem;
    text-align: center;
  `;
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
    <Container>
      <div>Page Not Found
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
      </div>
    </Container>
  );
};

export default PageNotFound;
