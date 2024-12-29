import React from 'react';
import styled from 'styled-components';

const SupportContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 2rem;

  h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Support = () => {
  return (
    <SupportContainer>
      <h1>Support</h1>
      <ContactInfo>
        <h3>Emergency Contact</h3>
        <p>Emergency Number: +1234567890</p>
        
        <h3>Business Inquiries</h3>
        <p>Business Email: business@kamdone.com</p>
        
        <p>Our support team is available 24/7 to assist you with any queries or concerns.</p>
      </ContactInfo>
    </SupportContainer>
  );
};

export default Support;
