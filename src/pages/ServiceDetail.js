import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { services } from '../data/services';

const DetailContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: var(--light-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    opacity: 0.05;
  }

  h1 {
    margin-bottom: 1.5rem;
    position: relative;
  }

  p {
    color: var(--dark-color);
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: var(--light-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  overflow: hidden;

  li {
    padding: 1.5rem;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: rgba(108, 99, 255, 0.05);
      transform: translateX(10px);
    }

    &:before {
      content: "✦";
      color: var(--primary-color);
      margin-right: 1rem;
      font-size: 1.2rem;
    }
  }
`;

const PriceSection = styled.div`
  background: var(--light-color);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: var(--box-shadow);
  position: sticky;
  top: 2rem;

  h2 {
    color: var(--dark-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .price {
    font-size: 3rem;
    color: var(--primary-color);
    font-weight: bold;
    margin: 1.5rem 0;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BuyButton = styled.button`
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(108, 99, 255, 0.3);
  }
`;

const BackButton = styled.button`
  background: transparent;
  color: var(--dark-color);
  border: 2px solid var(--primary-color);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-bottom: 2rem;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateX(-5px);
  }

  &:before {
    content: "←";
    font-size: 1.2rem;
  }
`;

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <DetailContainer>Service not found</DetailContainer>;
  }

  const handleBuyNow = () => {
    // Implement your payment/checkout logic here
    alert('Redirecting to payment gateway...');
  };

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate('/services')}>
        Back to Services
      </BackButton>
      
      <ServiceHeader>
        <h1>{service.title}</h1>
        <p>{service.fullDescription}</p>
      </ServiceHeader>

      <ContentWrapper>
        <FeaturesList>
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </FeaturesList>

        <PriceSection>
          <h2>Investment</h2>
          <div className="price">{service.price}</div>
          <BuyButton onClick={handleBuyNow}>Buy Now</BuyButton>
        </PriceSection>
      </ContentWrapper>
    </DetailContainer>
  );
};

export default ServiceDetail;
