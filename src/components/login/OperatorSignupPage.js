import React from 'react'
import { MainPageContainer } from '../../styled-components'
import OperatorSignupForm from './OperatorSignupForm'
import Header2 from '../headers/Header2'

const OperatorSignupPage = () => {
    return(
        <>
            <Header2 />
            <MainPageContainer>
            <h1>REGISTER</h1>
                <OperatorSignupForm />
            </MainPageContainer>
        </>
    )
}

export default OperatorSignupPage