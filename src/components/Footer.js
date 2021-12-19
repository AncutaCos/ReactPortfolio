import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .copyright {
    background-color: var(--deep-dark);
    text-align: left;
    margin-top: 5rem;
    padding: 1rem 0;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Ancuta Cosovanu</h1>

          <PText>I'm a junior full stack developer from Prato, Italy.</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',

                path: '/',

                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+393297710450',
                path: 'tel:+393297710450',
              },
              {
                title: 'ancuta_cosovanu@yahoo.com',
                path: 'mailto:ancuta_cosovanu@yahoo.com',
              },
              {
                title: 'Prato, Italy',
                path: 'http:/google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com/ancuta.cosovanu',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/ancutacosovanu/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>2021 Ancuta Cosovanu </PText>
          <h3>Made with ❤ in Italy</h3>
        </div>
      </div>
    </FooterStyles>
  );
}
