import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { services } from '../data/services';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    color: var(--dark-color);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.8;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const Card = styled.div`
  background: var(--light-color);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient-primary);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(108, 99, 255, 0.2);
  }

  h3 {
    color: var(--dark-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: var(--dark-color);
    margin-bottom: 1.5rem;
    opacity: 0.8;
    line-height: 1.6;
  }
`;

const InterestButton = styled.button`
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(108, 99, 255, 0.3);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-secondary);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;

  img {
    width: 30px;
    height: 30px;
  }
`;

const Services = () => {
  const navigate = useNavigate();

  const handleInterestClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <ServicesContainer>
      <ServicesHeader>
        <h1>Our Services</h1>
        <p>Discover our comprehensive range of digital services designed to help your business grow and succeed in the digital world.</p>
      </ServicesHeader>
      <CardsGrid>
        {services.map((service) => (
          <Card key={service.id}>
            <IconWrapper>
              {/* You can add icons here */}
            </IconWrapper>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <InterestButton onClick={() => handleInterestClick(service.id)}>
              I Am Interested
            </InterestButton>
          </Card>
        ))}
      </CardsGrid>
    </ServicesContainer>
  );
};

export default Services;
