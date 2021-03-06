import React from 'react'
import { MainPageContainer } from '../../styled-components'
import SignupForm from './SignupForm'
import Header from '../headers/Header'

const SignupPage = () => {
    return(
        <>
            <Header />
            <MainPageContainer>
            <h1>REGISTER</h1>
                <SignupForm />
            </MainPageContainer>
        </>
    )
}

export default SignupPage