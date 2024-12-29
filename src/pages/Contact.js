import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
  }

  input, select, textarea {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  textarea {
    min-height: 150px;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    service: '',
    description: '',
    termsAccepted: false
  });

  const services = [
    'Social Media Marketing',
    'Web Designing',
    'Application Development',
    'Thumbnail Designing',
    'Photo Editing',
    'Video Editing',
    'Youtube Shorts Editing',
    'Instagram Reels Editing',
    'Logo Designing',
    'Visiting Card Designing'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            I accept the terms and conditions
          </label>
        </FormGroup>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
