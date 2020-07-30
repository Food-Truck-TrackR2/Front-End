import React, { useEffect } from "react";
import { OperatorBody, MyH2, MyH3, OperatorText } from '../../styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TruckCard from "./TruckCard"
import OperatorHeader from '../headers/OperatorHeader'
import { fetchOperatorTrucks } from "../../actions";

const OperatorDashboard = () => {
  
  return (
    <>
      <OperatorHeader />
      <OperatorBody>
        <MyH2>{}</MyH2>


        <MyH3> Your Trucks: </MyH3>

          <OperatorText>
     
          </OperatorText> 
    


      </OperatorBody>
    </>
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

