import React, { useContext } from 'react';
import { FooterContainer, FooterText } from './styledFooter';
import { DraculaContext } from '../app/App';

function Footer() {
  const draculaMode = useContext(DraculaContext);

  return (
    <FooterContainer>
      <FooterText>Designed and built by Colin Maretsky</FooterText>
      <FooterText>The Year of {draculaMode ? 'Vlad the Impaler, 591' : 'Our Lord, 2019'}</FooterText>
    </FooterContainer>
  );
}

export default Footer;
