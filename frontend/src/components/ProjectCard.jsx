import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ project }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="top-section">
          <div className="border" />
          <div className="icons">
            <div className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 94" className="svg">
                <path fill="white" d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z" />
                <path fill="white" d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z" />
                <path fill="white" d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z" />
              </svg>
            </div>
            <div className="social-media">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg">
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L19 6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"/>
                </svg>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <span className="title">{project.title}</span>
          <p className="description">{project.description}</p>
          <div className="row row1">
            <div className="item">
              <span className="big-text">{project.tech || 'React'}</span>
              <span className="regular-text">Technology</span>
            </div>
            <div className="item">
              <span className="big-text">{project.status || 'Live'}</span>
              <span className="regular-text">Status</span>
            </div>
            <div className="item">
              <span className="big-text">{project.year || '2024'}</span>
              <span className="regular-text">Year</span>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 280px;
    border-radius: 20px;
    background: #1e1e1e;
    padding: 5px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin: 0 auto;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card .top-section {
    height: 150px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, #3c5d4b 0%, #6cc9dd 100%);
    position: relative;
  }

  .card .top-section .border {
    border-bottom-right-radius: 10px;
    height: 30px;
    width: 130px;
    background: #1e1e1e;
    position: relative;
    transform: skew(-40deg);
    box-shadow: -10px -10px 0 0 #1e1e1e;
  }

  .card .top-section .border::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    right: -15px;
    background: rgba(255, 255, 255, 0);
    border-top-left-radius: 10px;
    box-shadow: -5px -5px 0 2px #1e1e1e;
  }

  .card .top-section::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    background: rgba(255, 255, 255, 0);
    height: 15px;
    width: 15px;
    border-top-left-radius: 15px;
    box-shadow: -5px -5px 0 2px #1e1e1e;
  }

  .card .top-section .icons {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
  }

  .card .top-section .icons .logo {
    height: 100%;
    aspect-ratio: 1;
    padding: 7px 0 7px 15px;
  }

  .card .top-section .icons .logo .svg {
    height: 100%;
  }

  .card .top-section .icons .social-media {
    height: 100%;
    padding: 8px 15px;
    display: flex;
    gap: 7px;
  }

  .card .top-section .icons .social-media .icon-link {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .card .top-section .icons .social-media .svg {
    height: 16px;
    width: 16px;
    fill: #1e1e1e;
    transition: fill 0.3s ease;
  }

  .card .top-section .icons .social-media .svg:hover {
    fill: #f7f7f7;
  }

  .card .bottom-section {
    margin-top: 15px;
    padding: 15px 10px;
  }

  .card .bottom-section .title {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #f7f7f7;
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  .card .bottom-section .description {
    color: #aabbb2;
    font-size: 12px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 1.4;
  }

  .card .bottom-section .row {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .card .bottom-section .row .item {
    flex: 30%;
    text-align: center;
    padding: 5px;
    color: #aabbb2;
  }

  .card .bottom-section .row .item .big-text {
    font-size: 11px;
    display: block;
    font-weight: bold;
    color: #6cc9dd;
  }

  .card .bottom-section .row .item .regular-text {
    font-size: 9px;
    color: #aabbb2;
  }

  .card .bottom-section .row .item:nth-child(2) {
    border-left: 1px solid rgba(255, 255, 255, 0.126);
    border-right: 1px solid rgba(255, 255, 255, 0.126);
  }
`;

export default ProjectCard;
