import React from 'react'
import { HeaderContainer, Logo, NavLinks } from '../../styled-components'

const Header = () => {
    return(
        <HeaderContainer>
            <NavLinks href='https://cranky-keller-308f13.netlify.app/'>
                <Logo src='https://i.ibb.co/kqw30n8/logo.png' />
            </NavLinks>
        </HeaderContainer>
    )
}

export default Header