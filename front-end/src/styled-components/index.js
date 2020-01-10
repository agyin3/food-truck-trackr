import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 10vh;
    background: #ECA564;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center
    box-shadow: 0 5px #E68959;
    margin-bottom: 5px;
`

export const OperatorHead = styled.div`
    height: 10vh;
    background: #ECA564;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center
    box-shadow: 0 5px #E68959;
    margin-bottom: 5px;
    padding: 0 2%;
`

export const Navigation = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 30%;
`

export const NavLinks = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1.8rem;
    &:hover{
        color: #000;
        cursor: pointer;
    }
`

export const HeroTitle = styled.h1`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 3.2rem;
    font-weight: extra-bold;
`

export const FormContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    padding-top: 5%;
    color: #fff;
`

export const MainPageContainer = styled.div`
    height: 100vh;
    width: 100%;
    background: url(https://github.com/agyin3/images/blob/master/food-truck-trackr/shari-sirotnak-IXh_h9UZctc-unsplash.jpg?raw=true) rgba(0,0,0,0.4);
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`