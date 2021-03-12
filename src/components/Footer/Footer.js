import React from 'react';
import {
  Footer, FooterText,
} from './Footer.style';

function FooterContainer() {
  return (
    <Footer>
      <FooterText>
        Created by:
        {' '}
        <a href="https://github.com/DirceuRezende">Dirceu Rezende</a>
      </FooterText>

    </Footer>
  );
}

export default FooterContainer;
