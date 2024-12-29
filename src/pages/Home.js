import React from 'react';
import { PiTagBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Hero = styled.div`
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border-radius: 20px;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  animation: ${fadeIn} 1s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%);
  }

  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    margin-bottom: 1.5rem;
    text-shadow: 2px 4px 8px rgba(0,0,0,0.2);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.4rem);
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.9;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  background-color: white;
  color: #6e8efb;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    background: #f8f9ff;
  }

  &::after {
    content: '→';
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
  }
`;

const FeaturedWorks = styled.div`
  animation: ${fadeIn} 1s ease-out 0.3s backwards;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    position: relative;
    color: #2d3748;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(to right, #6e8efb, #a777e3);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    h2 {
      margin-bottom: 2rem;
    }
  }
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0;
  }
`;

const WorkCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .content {
    padding: 1.8rem;
    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 10%);

    h3 {
      margin-bottom: 1rem;
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      color: #2d3748;
      font-weight: 600;
    }

    p {
      color: #4a5568;
      line-height: 1.6;
      font-size: clamp(0.9rem, 1.5vw, 1rem);
    }
  }

  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <h1>Welcome to KamDone</h1>
        <p>Transforming your ideas into exceptional digital experiences with innovative solutions and cutting-edge technology</p>
        <CTAButton to="/services">Explore Our Services</CTAButton>
      </Hero>

      <FeaturedWorks>
        <h2>Our Works</h2>
        <WorksGrid>
          <WorkCard>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Web Design Project" />
            <div className="content">
              <h3>Web Design</h3>
              <p>Creating stunning, responsive websites that captivate your audience</p>
            </div>
          </WorkCard>
          <WorkCard>
            <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Social Media Project" />
            <div className="content">
              <h3>Social Media</h3>
              <p>Strategic social media marketing that drives engagement and growth</p>
            </div>
          </WorkCard>
          <WorkCard>
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="App Development Project" />
            <div className="content">
              <h3>App Development</h3>
              <p>Building powerful, user-friendly mobile and web applications</p>
            </div>
          </WorkCard>
        </WorksGrid>
      </FeaturedWorks>
    </HomeContainer>
  );
};

export default Home;