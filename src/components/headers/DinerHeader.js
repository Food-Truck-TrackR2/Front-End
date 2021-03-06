import React from 'react'
import history from '../history'
import { OperatorHead, Logo, Navigation, NavLinks } from '../../styled-components'

const DinerHeader = () => {
    const signOut = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return(
        <OperatorHead>
            <NavLinks href='https://cranky-keller-308f13.netlify.app/'>
                <Logo src='https://github.com/agyin3/images/blob/master/food-truck-trackr/logo.png?raw=true' />
            </NavLinks>
            <Navigation>
                <NavLinks href='/diner/dashboard'>Dashboard</NavLinks>
                <NavLinks href='/diner/trucks'>Trucks</NavLinks>
                <NavLinks onClick={signOut}>Sign Out</NavLinks>
            </Navigation>
        </OperatorHead>
    )
}

export default DinerHeader