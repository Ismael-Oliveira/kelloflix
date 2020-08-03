import React from 'react';
import { Link } from 'react-router-dom';

import { LogoImage, MenuWrapper } from './style';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './Menu.css';
// import ButtonLink from './components/ButtonLink'

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="Logo da kelloflix" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>

    </MenuWrapper>
  );
}

export default Menu;
