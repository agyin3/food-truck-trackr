import React, { useState } from "react";
import { DinerCardImg, CardInfo, CardButton, ButtonContainer, DinerCardWrapper, Button} from '../../styled-components'
import history from '../history'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DinerCard = props => {

  const [favorite, setFavorite] = useState(false)

  const addFavorite = () => {
    setFavorite(!favorite)
  }

  const redirect = () => {
    history.push(`/diner/trucks/${props.truck.id}`)
  }

  const deleteTruck = () => {
    props.deleteTruck(props.truck)
  }
  return (
      <DinerCardWrapper>
        <DinerCardImg src={props.truck.image_url}>
          {props.truck.name}
        </DinerCardImg>

        <CardInfo>
          <p>Cuisine Type: {props.truck.categories.map(category => {
               return `${category.title} `
          })}</p>
          <p>Customer Rating: {props.truck.rating}</p>
          <ButtonContainer width='100%'>
            <Button onClick={redirect}>View More</Button>
            <FontAwesomeIcon className='favIcon' onClick={addFavorite} icon={favorite ? ['fas', 'heart'] : ['far', 'heart']} size='lg' />
          </ButtonContainer>
        </CardInfo>
      </DinerCardWrapper>
  );
}

export default connect(
  null,
  {}
)(DinerCard)