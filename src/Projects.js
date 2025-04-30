import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({ darkMode }) => {
  
  const Container = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 4rem 2rem;
    background: var(--bg-color);
    color: var(--text-color);
    overflow: hidden;
    transition: background 0.4s ease, color 0.4s ease;
    font-family: 'Segoe UI', sans-serif;

    /* Light Mode */
    &.light {
      --bg-color: linear-gradient(to bottom right, #e3f2fd, #ffffff, #ffe0ef);
      --text-color: #222;
    }

    /* Dark Mode */
    &.dark {
      --bg-color: linear-gradient(to bottom right, #2c2c2c, #323232, #383838);
      --text-color: #f5f5f5;
    }
  `;

  const Content = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h1 {
      margin-bottom: 2rem;
      font-size: 2.5rem;
      color: var(--text-color);
      text-align: center;
    }
  `;

  const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const ProjectCard = styled.div`
    position: relative;
    background: none;
    border-radius: 16px;
    width: 100%;
    max-width: 350px;
    box-shadow: var(--box-shadow);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    margin: 0 auto;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid transparent;
    position: relative;

    &:hover {
      box-shadow: var(--hover-box-shadow);
      transform: translateY(-5px);
    }

    /* Light Mode */
    &.light {
      --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      --hover-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    /* Dark Mode */
    &.dark {
      --box-shadow: 0 4px 20px rgba(77, 47, 174, 0.1);
      --hover-box-shadow: 0 0 30px rgba(63, 22, 131, 0.2);
    }
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  `;

  const PortfolioLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.3s ease;
    color: #fff;
    padding: 1rem;

    &:hover {
      opacity: 1;
    }

    div {
      text-align: center;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #ffffff !important; ;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      color: ${darkMode ? '#e0e0e0' : '#d3d3d3'};
    }

    i {
      font-size: 1.5rem;
      margin-top: 1rem;
      color: ${darkMode ? '#ff5722' : '#333'};
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

  const projects = [
    {
      title: 'Cocktail Explorer App',
      description:
        'A web app that helps users search and explore various cocktail recipes using a third-party API, with filtering and ingredient details.',
      link: 'https://suraakhila-cocktails.netlify.app/',
      imageSrc: '/images/drinks.png',
    },
    {
      title: 'Editable Data Table',
      description:
        'An interactive data editor app allowing users to add, edit, and delete rows dynamically in a table format using React.',
      link: 'https://suraakhila-dataeditor.netlify.app/',
      imageSrc: '/images/users.png',
    },
    {
      title: 'Image Gallery Viewer',
      description:'An elegant gallery app that displays a collection of images with smooth transitions and responsive design, built using React.',
      link: 'https://sura-akhila.netlify.app/',
      imageSrc: '/images/viewimg.png',
    }
  ];
  
  return (
    <Container className={darkMode ? 'dark' : 'light'}>
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
      <Content>
        <h1>My Projects</h1>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard className={darkMode ? 'dark' : 'light'} key={index}>
              <Image src={project.imageSrc} alt={project.title} />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <PortfolioLayer>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <FaExternalLinkAlt /> {/* Adding React icon */}
                  </div>
                </PortfolioLayer>
              </a>
            </ProjectCard>
          ))}
        </ProjectGrid>
        <footer
  style={{
    position:'sticky',
    bottom:0,
    textAlign: 'center',
    padding: '1rem',
    // backgroundColor: '#f1f1f1',
    color: '#333',
    fontSize: '14px',
    // borderTop: '1px solid #ccc',
    marginTop: 'auto',
  }}
>
  Copyright © {new Date().getFullYear()} by Sura Akhila | All Rights Reserved.
</footer>
      </Content>
    </Container>
  );
};

export default Project;
