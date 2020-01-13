import React from 'react'
import history from '../history'
import { Logo, Navigation, NavLinks, HeaderContainer } from '../../styled-components'

const OperatorHeader = () => {
    const signOut = () => {
        localStorage.removeItem('reduxState');
        localStorage.removeItem('token')
        localStorage.removeItem('type')
        history.push('/login')
    }

    return(
        <HeaderContainer>
            <NavLinks href='https://heuristic-swanson-2ca27f.netlify.com/'>
                <Logo src='https://github.com/agyin3/images/blob/master/food-truck-trackr/logo.png?raw=true' />
            </NavLinks>
            <Navigation>
                <NavLinks href='/operator/dashboard'>Dashboard</NavLinks>
                <NavLinks href='/operator/add-trucks'>Add Trucks</NavLinks>
                <NavLinks onClick={signOut}>Sign Out</NavLinks>
            </Navigation>
        </HeaderContainer>
    )
}

export default OperatorHeader