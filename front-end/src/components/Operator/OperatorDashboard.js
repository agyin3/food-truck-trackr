import React, { useEffect, useState } from "react";
import Zoom from 'react-reveal/Zoom'
import { OperatorBody, MyH3, OperatorText, ComponentContainer, AddButton } from '../../styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FoodTruckForm from './FoodTruckForm'
import TruckCard from "./TruckCard"
import { fetchOperatorTrucks } from "../../actions";
import OperatorSidePanel from "../headers/OperatorSidePanel";

const OperatorDashboard = props => {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  useEffect(() => {
    props.fetchOperatorTrucks('/trucks/owned');
  }, []);

  
  return (
    <ComponentContainer>
      <OperatorSidePanel />
      <OperatorBody>


        <MyH3> Your Trucks </MyH3>
        <AddButton onClick={handleShow}>Add Truck</AddButton>
        <Zoom collapse when={show}>
          <FoodTruckForm />
        </Zoom>
        {props.operator.trucks.length < 1 && 
          <OperatorText>
          Click <Link id='operator-link' className='login-link' to='/operator/add-trucks'>here</Link> to add your trucks
          </OperatorText> 
        }
    
        {props.operator.trucks && props.operator.trucks.map(truck => { 
          return <TruckCard key={truck.id} truck={truck}/>
        })}

      </OperatorBody>
    </ComponentContainer>
  );
}

const mapStateToProps = state => {
  return {
    operator: state.operator,
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  {fetchOperatorTrucks}
)(OperatorDashboard)

