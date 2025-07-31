import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;


const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 16px;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
`;

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <SocialLinks>
          <SocialIcon href="https://www.linkedin.com/in/harsh52/" target="_blank"><FaLinkedin /></SocialIcon>
          <SocialIcon href="https://github.com/harsh5206" target="_blank"><FaGithub /></SocialIcon>
          <SocialIcon href="https://x.com/Harsh520609" target="_blank"><FaTwitter /></SocialIcon>
        </SocialLinks>
        <ContactInfo>
          <div><FaEnvelope /> harshmangukiya2000@gmail.com</div>
<<<<<<< HEAD
          <div><FaPhone /> +91 8291174561 </div>
=======
          <div><FaPhone /> +1(540)-824-8752</div>
>>>>>>> 060d5cec808736a13a6367038a6ca5433722f8d3
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
