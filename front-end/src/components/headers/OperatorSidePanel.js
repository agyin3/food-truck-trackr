import React from 'react'
import history from '../history'
import { Logo, SidePanel, NavLinks, MyH2, PanelContainer  } from '../../styled-components'
import { connect } from 'react-redux'

const OperatorHeader = props => {
    const signOut = () => {
        localStorage.removeItem('reduxState');
        localStorage.removeItem('token')
        localStorage.removeItem('type')
        history.push('/login')
    }

    return(

        <SidePanel>
            <PanelContainer>
                <NavLinks href='https://heuristic-swanson-2ca27f.netlify.com/'>
                    <Logo src='https://github.com/agyin3/images/blob/master/food-truck-trackr/logo.png?raw=true' />
                </NavLinks>
                <MyH2>{props.operator.message}</MyH2>
                <NavLinks href='/operator/dashboard'>Dashboard</NavLinks>
                <NavLinks onClick={signOut}>Sign Out</NavLinks>
            </PanelContainer>
        </SidePanel>
        // <HeaderContainer>
        //     <NavLinks href='https://heuristic-swanson-2ca27f.netlify.com/'>
        //         <Logo src='https://github.com/agyin3/images/blob/master/food-truck-trackr/logo.png?raw=true' />
        //     </NavLinks>
        //     <Navigation>
        //         <NavLinks href='/operator/dashboard'>Dashboard</NavLinks>
        //         <NavLinks href='/operator/add-trucks'>Add Trucks</NavLinks>
        //         <NavLinks onClick={signOut}>Sign Out</NavLinks>
        //     </Navigation>
        // </HeaderContainer>
    )
}

const mapStateToProps = state => {
    return{
        operator: state.operator
    }
}

export default connect(
    mapStateToProps,
    {}
)(OperatorHeader)