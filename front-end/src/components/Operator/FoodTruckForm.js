import React, { useState } from "react";
import { connect } from "react-redux";
import { Form } from 'semantic-ui-react'
import { TruckFormContainer } from '../../styled-components'
import { addTruck } from "../../actions";

const FoodTruckForm = props => {
  const [truck, setTruck] = useState({
    truckname: "",
    cuisineType: "",
    menuitems: ""
  });

  const [message, setMessage] = useState({error: '', success: ''})

  const handleChanges = event => {
    setTruck({ ...truck, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addTruck({ ...truck, id: props.operator.id });
    setMessage({error: props.error, success: props.success})
    setTruck({ truckname: "", cuisineType: "" });
  };

  console.log(message)

  return (
    <>
      <TruckFormContainer>
        <Form onSubmit={submitForm}>
          <Form.Input
            id="truckname"
            type="text"
            name="truckname"
            placeholder="Enter a Truck Name"
            onChange={handleChanges}
            value={truck.truckname}
          />
          <Form.Input
            id="cuisineType"
            name="cuisineType"
            placeholder="Add cuisineType here"
            onChange={handleChanges}
            value={truck.cuisineType}
          />

          <Form.Button type="submit">Add Food Truck</Form.Button>
              {message.success && <p class='success'>{message.success}</p>}
              {message.error && <p className='error'>{message.error}</p>}
        </Form>
      </TruckFormContainer>
    </>
  );
};

const mapStateToProps = state => {
  return {
    operator: state.operator,
    success: state.success,
    error: state.error
  };
};

export default connect(
  mapStateToProps, 
  { addTruck }
)(FoodTruckForm);
