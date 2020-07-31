import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userRegister2 } from '../../actions'
import { FormContainer } from '../../styled-components'
import { Form } from 'semantic-ui-react'
import { useInput } from '../hooks/useInput'

const OperatorSignupForm = props => {
    
    const [username, setUsername, handleUsername] = useInput('')
    const [password, setPassword, handlePassword] = useInput('')

    const userRegister2 = e => {
        e.preventDefault()
        console.log(            
            username,
            password,
            )
            props.userRegister2({
                username,
                password,
            })

            setUsername('')
            setPassword('')
    }
    return(
        <FormContainer>
            <Form size='massive' inverted>
                    <Form.Input 
                    required
                    label='Username' 
                    type='text' 
                    name='username' 
                    value={username} 
                    onChange={e => handleUsername(e.target.value)} 
                    />
                    <Form.Input
                    required
                    label='Password'
                    type='text'
                    value={password}
                    name='password'
                    onChange={e => handlePassword(e.target.value)}  
                    />
                    
                    <p className='error'>{props.error}</p>
                    <Form.Group inline>
                        <Form.Button size='massive' onClick={userRegister2}>Submit</Form.Button>
                        <Link className='login-link' to='/Operatorlogin'>Login</Link>
                    </Form.Group>
            </Form>
        </FormContainer>
    )
}

const mapStateToProps = state => {
    return {
        options: state.options,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { userRegister2 }
)(OperatorSignupForm)