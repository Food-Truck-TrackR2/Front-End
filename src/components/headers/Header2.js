import React from 'react'
import { HeaderContainer, Logo, NavLinks } from '../../styled-components'
import "../../App.css"

const Header2 = () => {
    return(
        <HeaderContainer>
            <NavLinks href='https://cranky-keller-308f13.netlify.app/'>
                <Logo src='https://i.ibb.co/kqw30n8/logo.png' />
            </NavLinks>
            <h1 className="login-title">Operator</h1>
        </HeaderContainer>
    )
}

export default Header2