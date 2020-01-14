import React from "react";
import { CardImg, MenuText, MenuH2, DinerBody, ComponentContainer } from '../../styled-components'
import { connect } from 'react-redux'
import DinerSidePanel from "../headers/DinerSidePanel";

const DinerTruckMenu = props => {
  const id = props.match.params.id
  const singleTruck = props.foodTrucks.filter(t => t.id == id)
  const truck = singleTruck[0];

  return (
    <ComponentContainer>
    <DinerSidePanel />
    <DinerBody>
      <CardImg src={truck.image_url} />
      <MenuText>Truck Name: {truck.name}</MenuText>
      <MenuText>
          CuisineType: {truck.categories.map(category => {
               return `${category.title} `
          })}
        </MenuText>
      <MenuText>Customer Rating: {truck.rating}</MenuText>
    </DinerBody>
    </ComponentContainer>
  );
}

const mapStateToProps = state => {
  return{
      foodTrucks: state.foodTrucks
  }
}

export default connect(
  mapStateToProps,
  {}
)(DinerTruckMenu)
