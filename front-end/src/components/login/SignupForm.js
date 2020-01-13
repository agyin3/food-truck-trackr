import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userRegister } from '../../actions'
import { FormButton, FormFooter, FormLogo, FormHeading } from '../../styled-components';
import { Form, Card } from 'semantic-ui-react'
import { useInput } from '../hooks/useInput'

const SignupForm = props => {
    
    const [type, setType, handleType] = useInput('')
    const [email, setEmail, handleEmail] = useInput('')
    const [currentLocation, setCurrent, handleCurrent] = useInput('')
    const [username, setUsername, handleUsername] = useInput('')
    const [password, setPassword, handlePassword] = useInput('')

    const userRegister = e => {
        localStorage.setItem('type', type.value)
        e.preventDefault()
        console.log(            
            username,
            password,
            email,
            currentLocation, 
            type.value,
            )
            props.userRegister({
                username,
                password,
                email,
                currentLocation, 
                type: type.value,
            })
            setType('')
            setEmail('')
            setCurrent('')
            setUsername('')
            setPassword('')
    }
    return(
        <div className='card-container'>
        <Card fluid>
            <Card.Content textAlign='center'>
            <FormLogo src='https://github.com/agyin3/images/blob/master/food-truck-trackr/Logo_1.png?raw=true' />
            <FormHeading>Account Registration</FormHeading>
            <Form size='huge' onSubmit={userRegister}>
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
                    placeholder='Email'
                    type='email'
                    value={email}
                    name='email'
                    onChange={e => handleEmail(e.target.value)}  
                    />
                    <Form.Input
                    required
                    placeholder='Password'
                    type='text'
                    value={password}
                    name='password'
                    onChange={e => handlePassword(e.target.value)}  
                    />
                    <Form.Input
                    required
                    placeholder='Current City'
                    type='text'
                    value={currentLocation}
                    name='current'
                    onChange={e => handleCurrent(e.target.value)}  
                    />
                    <p className='error'>{props.error}</p>
                    <FormButton onClick={userRegister}>Submit</FormButton>
            </Form>
            <FormFooter>Already have an account | <Link className='login-link' to='/login'>Sign in</Link></FormFooter>
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
    { userRegister }
)(SignupForm)