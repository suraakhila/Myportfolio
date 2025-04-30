import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import Footer from './Footer';

const Contact = ({ darkMode }) => {
  const Container = styled.div`
    position: relative;
    height: 100vh;
    background: ${darkMode
      ? 'linear-gradient(to bottom right, #181818, #1f1f1f, #2c2c2c)'
      : 'linear-gradient(to bottom right, #e3f2fd, #ffffff, #ffe0ef)'};
    color: ${darkMode ? '#fff' : '#111'};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: background 0.4s ease, color 0.4s ease;
  `;

  const StyledForm = styled.form`
    background-color: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(83, 44, 63, 0.05)'};
    color: inherit;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;
    transition: box-shadow 0.4s ease, background-color 0.4s ease;

    &:hover {
      box-shadow: ${darkMode
        ? '0 0 30px rgba(255, 215, 0, 0.6)'
        : '0 0 20px rgba(0, 0, 0, 0.2)'};
    }
  `;

  const Input = styled.input`
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    outline: none;
    background: ${darkMode ? '#1e1e1e' : '#fff'};
    color: ${darkMode ? '#fff' : '#000'};
  `;

  const TextArea = styled.textarea`
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    outline: none;
    resize: none;
    background: ${darkMode ? '#1e1e1e' : '#fff'};
    color: ${darkMode ? '#fff' : '#000'};
  `;

  const Button = styled.button`
    background-color: ${darkMode ? 'gold' : '#007bff'};
    color: ${darkMode ? 'black' : 'white'};
    border: none;
    padding: 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: ${darkMode ? '#ffd700' : '#0056b3'};
    }
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

  const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    a {
      color: ${darkMode ? 'gold' : '#007bff'};
      font-size: 24px;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${darkMode ? 'white' : '#0056b3'};
      }
    }
  `;

  return (
    <Container>
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

      <StyledForm>
        <h1>Get In Touch</h1>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Email" />
        <TextArea rows={5} placeholder="Message" />
        <Button type="submit">Send</Button>

        <SocialLinks style={{paddingLeft: 80}}>
          <a href="https://www.linkedin.com/in/sura-akhila-955787258/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/suraakhila" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:suraakhila9@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope style={{ fontSize: '1.5rem' }} />
          </a>
          <a href="https://www.hackerrank.com/suraakhila" target="_blank" rel="noopener noreferrer">
            <FaHackerrank />
          </a>
          <a href="https://leetcode.com/akhilasura/" target="_blank" rel="noopener noreferrer">
            <FaCode />
          </a>
        </SocialLinks>
        <Footer darkMode={darkMode}/>
      </StyledForm>
    
    </Container>
  );
};

export default Contact;
