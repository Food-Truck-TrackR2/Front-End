import React from 'react'
import history from '../history'
import { OperatorHead, Logo, Navigation, NavLinks } from '../../styled-components'

const OperatorHeader = () => {
    const signOut = () => {
        localStorage.removeItem('reduxState');
        localStorage.removeItem('token')
        localStorage.removeItem('type')
        history.push('/login')
    }

    return(
        <OperatorHead>
            <NavLinks href='https://cranky-keller-308f13.netlify.app/'>
                <Logo src='https://i.ibb.co/kqw30n8/logo.png' />
            </NavLinks>
            <Navigation>
                <NavLinks href='https://cranky-keller-308f13.netlify.app/'>Home</NavLinks>
                <NavLinks href='/operator/dashboard'>Dashboard</NavLinks>
                <NavLinks href='/operator/add-trucks'>Add Trucks</NavLinks>
                <NavLinks onClick={signOut}>Sign Out</NavLinks>
            </Navigation>
        </OperatorHead>
    )
}

export default OperatorHeader