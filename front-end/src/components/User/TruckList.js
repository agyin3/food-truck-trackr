import React, { useEffect, useState } from 'react'
import { OperatorBody, MyH3, OperatorText, ComponentContainer, DinerCardGroup, Segment, SearchInput } from '../../styled-components'
import DinerCard from '../User/DinerCard'
import { connect } from 'react-redux'
import { getYelpTrucks } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DinerHeader from '../headers/DinerHeader'

const TruckList = props => {

    console.log(props.diner)
    const [location, setLocation] = useState(props.diner.location)
    const [search, setSearch] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setSearch(true)
        props.getYelpTrucks('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', location)
    }

    useEffect(() => {
        props.getYelpTrucks('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', location)
    }, [])
    return(
        <>
        <DinerHeader />
        <OperatorBody>
        <Segment>
            {!search ? <MyH3>Viewing trucks in {props.diner.location}</MyH3> : <MyH3>Viewing trucks in {location}</MyH3>}
            <form className='search-form' onSubmit={handleSubmit}>
            <div className='input-container'>
                <FontAwesomeIcon className='form-icon' icon='search'/>
                <SearchInput type='text' onChange={e => {setLocation(e.target.value)}} />
            </div>
            </form>
        </Segment>
        <DinerCardGroup>
        {props.foodTrucks && props.foodTrucks.map(truck => { 
          return <DinerCard key={truck.id} truck={truck}/>
        })}
        </DinerCardGroup>

      </OperatorBody>
    </>
    )
}

const mapStateToProps = state => {
    return{
        foodTrucks: state.foodTrucks,
        diner: state.diner
    }
}

export default connect(
    mapStateToProps,
    {getYelpTrucks}
)(TruckList)