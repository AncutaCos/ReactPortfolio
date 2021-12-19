import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and(max-width:768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi,I am <span>Ancuta Cosovanu</span>
            </p>
            <h2 className="about__heading">A Junior Full Stack developer</h2>
            <div className="about__info">
              <PText>
                I am from Iasi,Romania, a place of beauty and nature, but I live
                in Prato, Italy, a beautiful place also.
                <br />
                <br />
                I started coding from scratch about two years ago and I've found
                it very interesting, I love it and I enjoyed the process a lot.
                <br />
                <br />
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="/resume.pdf" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Ancuta's img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="High School"
              items={[' D.Cantemir High School, Iasi, Romania']}
            />
            <AboutInfoItem
              title="University"
              items={[
                'A.I.Cuza University, Iasi, Romania',
                'PIN, Prato, Italy',
              ]}
            />
            <AboutInfoItem
              title="Educational Platforms"
              items={['WellCode, Romania', 'Codecademy']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={[' HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Node', 'Express', 'MySql']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
