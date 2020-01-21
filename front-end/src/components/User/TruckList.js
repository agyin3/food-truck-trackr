import React, { useEffect, useState } from 'react'
import { OperatorBody, MyH3, DinerCardGroup, Segment, SearchInput } from '../../styled-components'
import DinerCard from '../User/DinerCard'
import { connect } from 'react-redux'
import { getYelpTrucks } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DinerHeader from '../headers/DinerHeader'

const TruckList = props => {
    const persistedState = localStorage.getItem('search')
    const [location, setLocation] = useState(persistedState ? persistedState : props.diner.location)
    const [query, setQuery] = useState()

    const handleSubmit = e => {
        localStorage.setItem('search', query)
        e.preventDefault()
        setLocation(query)
        setQuery('')
    }

    useEffect(() => {
        props.getYelpTrucks('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', location)
    }, [location])
    return(
        <>
        <DinerHeader />
        <OperatorBody>
        <Segment>
             <MyH3>Viewing trucks in {location}</MyH3>
            <form className='search-form' onSubmit={handleSubmit}>
            <div className='input-container'>
                <FontAwesomeIcon className='form-icon' icon='search'/>
                <SearchInput type='text' value={query} onChange={e => {setQuery(e.target.value)}} />
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