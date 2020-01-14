import React, { useEffect, useState } from "react";
import { CardImg, MenuText, MenuH2, DinerBody, ComponentContainer, MenuCard, CardTextContainer } from '../../styled-components'
import { connect } from 'react-redux'
import axiosWithAuth from '../axiosWithAuth'
import MenuModal from './MenuModal'
import OperatorSidePanel from "../headers/OperatorSidePanel";

function FoodTruckMenu(props) {
  const id = props.match.params.id
  const singleTruck = props.trucks.filter(t => t.id == id)
  const truck = singleTruck[0];

  const [menu, setMenu] = useState()

  useEffect(() => {
    axiosWithAuth()
        .post('/trucks/menu', {
            name: truck.name
        })
        .then(res => {
            setMenu(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
  }, [])

  console.log(menu)

  return (
    <ComponentContainer>
    <OperatorSidePanel />
    <DinerBody>
      <MenuCard>
        <CardImg src={truck.imgUrl} />
        <CardTextContainer>
          <MenuText>Truck Name: {truck.name}</MenuText>
          <MenuText>CuisineType: {truck.cuisineType}</MenuText>
          <MenuText>Customer Rating Average: {truck.customerRatingAvg} </MenuText>
        </CardTextContainer>
      </MenuCard>

      <MenuModal id={id} setMenu={setMenu} name={truck.name} />

      <MenuH2>Menu Items</MenuH2>

      {menu && menu.map(item => { 
          return(
          <CardTextContainer>
            <MenuText><strong>Item Name:</strong> {item.itemName} </MenuText>
            <MenuText><strong>Item Descrition:</strong> {item.itemDescription}</MenuText>
            <MenuText><strong>Item Price:</strong> {item.itemPrice}</MenuText>
            <hr />
          </CardTextContainer>
      )})}
    </DinerBody>
    </ComponentContainer>
  );
}

const mapStateToProps = state => {
  return{
      trucks: state.operator.trucks
  }
}

export default connect(
  mapStateToProps,
  {}
)(FoodTruckMenu)
