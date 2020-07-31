import React from 'react';
import { FooterBase } from './styles';
import vertoja from '../../assets/img/vertoja.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://flavicoflix.vercel.com">
        <img src={vertoja} alt="Logo Vertoja" />
      </a>
      <p>
        <a href="https://flavicoflix.vercel.com/">
          Orgulhosamente criado pelo flavico
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
