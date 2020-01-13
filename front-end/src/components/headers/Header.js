import React from 'react'
import { HeaderContainer, Logo, NavLinks, Navigation } from '../../styled-components'

const Header = () => {
    return(
        <HeaderContainer>
            <NavLinks href='https://heuristic-swanson-2ca27f.netlify.com/'>
                <Logo src='https://github.com/agyin3/images/blob/master/food-truck-trackr/logo.png?raw=true' />
            </NavLinks>
            <Navigation>
                <NavLinks href='/login'>Login</NavLinks>
                <NavLinks href='/register'>Register</NavLinks>
            </Navigation>
        </HeaderContainer>
    )
}

export default Header