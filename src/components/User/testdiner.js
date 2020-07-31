import React, { useEffect } from 'react'
import { DinerBody, MyH2, MyH3, OperatorText } from '../../styled-components'
import axiosWithAuth from '../axiosWithAuth'
import { connect } from 'react-redux'
import DinerHeader from '../headers/DinerHeader'
import axios from 'axios'

const TestDiner = props => {

    useEffect(() => {
        axios({
            method: 'get',
            url:'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
            headers: {
                Authorization: 'Bearer DSoKlOAhmsgJmRbBxBkX2AnnU01s5-4IIEyNTQELXYw9SLYPbjbkZ4AZPmiVts6zeAhbgUxlTEDbGpr4tyvwAnq8y9Gib6E5HyzLUUQNuDPwR9l9R8Zkw9xhhkkiX3Yx'
            },
            params: {
    
                term: 'food truck',
                location: 'Downey'
            }
  
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .get('/api/trucks')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
    

    return(
        <>
            <DinerHeader />
            <DinerBody>
            <MyH2>{props.diner.message}</MyH2>
            <OperatorText>Looks like you don't have any favorite trucks yet. <a href='/diner/trucks'>View</a> food trucks here</OperatorText>
            </DinerBody>
        </>
    )
}

const mapStateToProps = state => {
    return{
        diner: state.diner
    }
}

export default connect(
    mapStateToProps,
    {}
)(TestDiner)