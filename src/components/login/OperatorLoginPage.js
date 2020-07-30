import React from 'react'
import { MainPageContainer } from '../../styled-components'
import OperatorLoginForm from './OperatorLoginForm'
import Header2 from '../headers/Header2'

const OperatorLoginPage = props => {
    console.log(props.error)
    return(
        <>
            <Header2 />
            <MainPageContainer>
                <OperatorLoginForm />
            </MainPageContainer>
        </>
    )
}

export default OperatorLoginPage