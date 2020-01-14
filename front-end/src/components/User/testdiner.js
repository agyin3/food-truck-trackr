import React, { useEffect } from 'react'
import { OperatorBody, MyH2, MyH3, OperatorText, ComponentContainer } from '../../styled-components'
import axiosWithAuth from '../axiosWithAuth'
import { connect } from 'react-redux'
import DinerSidePanel from '../headers/DinerSidePanel'

const TestDiner = props => {

    useEffect(() => {
        axiosWithAuth()
            .get('/trucks')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
    

    return(
        <ComponentContainer>
            <DinerSidePanel />
            <OperatorBody>
            <OperatorText>
                Looks like you don't have any favorite trucks yet. <a href='/diner/trucks'>View</a> food trucks here
            </OperatorText>
            </OperatorBody>
        </ComponentContainer>
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