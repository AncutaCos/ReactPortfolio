import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem;
  .services__allItems {
    display: flex;
    gap: 10rem;
    margin-top: 5rem;
    justify-content: space-between;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I do" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do ui/ux desing for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I develop Webapp and Websites."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev "
            desc="I develop mobile application."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
