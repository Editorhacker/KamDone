import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const AboutContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 2rem;

  h2 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About Us</h1>
      <AboutContent>
        <h2>Our Story</h2>
        <p>
          KamDone is a leading digital services provider, specializing in a wide range of creative and technical solutions. 
          We're passionate about helping businesses and individuals bring their vision to life through innovative digital solutions.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver exceptional digital services that help our clients succeed in the modern digital landscape. 
          We combine creativity, technical expertise, and industry best practices to ensure outstanding results for every project.
        </p>

        <h2>Why Choose Us</h2>
        <p>
          - Expert team with years of experience<br />
          - Comprehensive range of digital services<br />
          - Customer-centric approach<br />
          - Timely delivery and professional support<br />
          - Competitive pricing and quality assurance
        </p>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
