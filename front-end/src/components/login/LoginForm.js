import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Card } from 'semantic-ui-react'
import { userLogin } from '../../actions'
import {useInput} from '../hooks/useInput'
import { FormButton, FormFooter, FormLogo, FormHeading } from '../../styled-components';

const LoginForm = props => {

    const [type, setType, handleType] = useInput('')
    const [username, setUsername, handleUsername] = useInput('')
    const [password, setPassword, handlePassword] = useInput('')

    const userLogin = e => {
        e.preventDefault()
        localStorage.setItem('type', type.value)
        props.userLogin({
            username,
            password,
            type: type.value
        })
        setType('')
        setUsername('')
        setPassword('')
    }
    return(
        <div className='card-container'>
        <Card fluid>
            <Card.Content textAlign='center'>
            <FormLogo src='https://github.com/agyin3/images/blob/master/food-truck-trackr/Logo_1.png?raw=true' />
            <FormHeading>Account Login</FormHeading>
            <Form size='huge' onSubmit={userLogin}>
                    <Form.Select 
                    required
                    name='type'
                    options={props.options}
                    placeholder='User Type'
                    value={type.value}
                    onChange={(e, {value}) => handleType({value})}
                    />
                    <Form.Input 
                    required
                    placeholder='Username' 
                    type='text' 
                    name='username' 
                    value={username} 
                    onChange={e => handleUsername(e.target.value)} 
                    />
                    <Form.Input
                    required
                    placeholder='Password'
                    type='password'
                    value={password}
                    name='password'
                    onChange={e => handlePassword(e.target.value)}  
                    />
                    <p className='error'>{props.error}</p>
                    <FormButton onClick={userLogin}>Submit</FormButton>
            </Form>
            <FormFooter>Need an Account | <Link className='login-link' to='/register'>Sign up</Link></FormFooter>
            </Card.Content>
        </Card>
        </div>
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
 {userLogin}
)(LoginForm)