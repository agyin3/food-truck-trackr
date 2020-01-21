import React from 'react'
import history from '../history'
import { HeaderContainer, Logo, NavLinks, Navigation } from '../../styled-components'

const Header = () => {
    const signOut = () => {
        localStorage.removeItem('reduxState');
        localStorage.removeItem('token')
        localStorage.removeItem('type')
        history.push('/login')
    }

    const handleDashboard = e => {
        e.preventDefault()
        localStorage.removeItem('search')
        history.push('/diner/dashboard')
    }
    return(
        <HeaderContainer>
            <NavLinks href='https://heuristic-swanson-2ca27f.netlify.com/'>
                <Logo src='https://github.com/agyin3/images/blob/master/food-truck-trackr/logo.png?raw=true' />
            </NavLinks>
            <Navigation>
                <NavLinks onClick={handleDashboard}>Dashboard</NavLinks>
                <NavLinks href='/diner/trucks'>Trucks</NavLinks>
                <NavLinks onClick={signOut}>Sign Out</NavLinks>
            </Navigation>
        </HeaderContainer>
    )
}

export default Header