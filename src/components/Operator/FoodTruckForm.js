import React, { useState } from "react";
import { connect } from "react-redux";
import { FormLabel, FormSpacing, TruckFormContainer, InputStyle, TextArea, TruckButton } from '../../styled-components'
import { addTruck } from "../../actions";
import OperatorHeader from "../headers/OperatorHeader";

const FoodTruckForm = props => {
  const [truck, setTruck] = useState({
    truckName: "",
    customerRatingAvg: 0,
    currentLocation: "",
    departTime: ""
  });

  const [message, setMessage] = useState({error: '', success: ''})

  const handleChanges = event => {
    setTruck({ ...truck, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    // props.addTruck({ ...truck, id: props.operator.id });
    setMessage({error: props.error, success: props.success})
    setTruck({   truckName: "", customerRatingAvg: 0, currentLocation: "", departTime: "" });
  };

  console.log(message)

  return (
    <>
      <OperatorHeader />
      <TruckFormContainer>
        <FormSpacing onSubmit={submitForm}>
          <FormLabel htmlFor="truckName">Food Truck Name</FormLabel>
          <InputStyle
            id="truckName"
            type="text"
            name="truckName"
            placeholder="Enter a Truck Name"
            onChange={handleChanges}
            value={truck.truckName}
          />

          <FormLabel htmlFor="customerRatingAvg">Customer Rating</FormLabel>
          <TextArea
            id="customerRatingAvg"
            type="number"
            name="customerRatingAvg"
            placeholder="add rating here"
            onChange={handleChanges}
            value={truck.customerRatingAvg}
          />
          <FormLabel htmlFor="currentLocation">Current Location</FormLabel>
          <InputStyle
            id="currentLocation"
            type="text"
            name="currentLocation"
            placeholder="Enter a Current Location"
            onChange={handleChanges}
            value={truck.currentLocation}
          />
          <FormLabel htmlFor="departTime">Depart Time</FormLabel>
          <InputStyle
            id="departTime"
            type="text"
            name="departTime"
            placeholder="Enter a Departure Time"
            onChange={handleChanges}
            value={truck.departTime}
          />

          <TruckButton type="submit">Add Food Truck</TruckButton>
              <p class='success'>{message.success}</p>
              <p className='error'>{message.error}</p>
        </FormSpacing>
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
