import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/bg-pattern-circle.svg';
import AboutComponentNumbers from '../components/about-components/AboutComponentNumbers';
import AboutComponentStatementTop from '../components/about-components/AboutComponentStatementTop';
import AboutComponentStatementBottom from '../components/about-components/AboutComponentStatementBottom';
import Img from '../components/about-components/Img';
import BottomForm from '../utils/BottomForm';

const AboutStyle = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: 200px -600px;
  @media (min-width: 500px) {
    background-position: 300px -600px;
  }
  .title-page {
    padding-top: 6rem;
    color: var(--san-juan-blue);
    font-size: 3.5rem;
    margin-inline: auto;
    width: 86%;
    text-align: center;
    line-height: 4rem;
    margin-bottom: 6rem;
  }
  @media (min-width: 700px) {
    background-position: 400px -500px;
    .title-page {
      font-size: 4.2rem;
      line-height: 4.5rem;
    }
  }
  @media (min-width: 1000px) {
    margin-inline: auto;
    .title-page {
      width: 70%;
      font-size: 4.4rem;
      text-align: left;
    }
  }
  @media (min-width: 1300px) {
    background-image: url(${bg}), url(${bg});
    background-position: 800px -600px, -500px 400px;
  }
`;

function about() {
  const title1 = 'Our Vision';
  const title2 = 'Our Business';
  const title3 = 'The Culture';
  const title4 = 'The People';
  const description1 =
    'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.';
  const description2 =
    'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.';
  const description3 =
    "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.";
  const description4 =
    "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.";
  return (
    <AboutStyle>
      <h3 className="title-page">
        We empower innovators by delivering access to the financial system
      </h3>
      <AboutComponentStatementTop
        title1={title1}
        description1={description1}
        title2={title2}
        description2={description2}
      />
      <Img />
      <AboutComponentNumbers />
      <AboutComponentStatementBottom
        title3={title3}
        description3={description3}
        title4={title4}
        description4={description4}
      />
      <BottomForm />
    </AboutStyle>
  );
}

export default about;
