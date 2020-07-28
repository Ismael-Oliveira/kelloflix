import React from 'react'

import Logo from '../../assets/img/Logo.png'
import {LogoImage, MenuWrapper, ButtonLink} from './style.js'
// import './Menu.css'
// import ButtonLink from './components/ButtonLink'

function Menu () {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="Logo da kelloflix"/>
            </a>
        
            <ButtonLink as="a" href="/">
                Novo vídeo
            </ButtonLink>
            
        </MenuWrapper>
    )
}

export default Menu