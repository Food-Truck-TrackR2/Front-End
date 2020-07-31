import React from 'react'


export default function TruckCard(props) {
	const { details } = props
	return (
        <div className="truckContainer">
            <div className="truckDiv"> 
                <img src={details.imgOfTruck}/>
            </div>
            <div className="infoCont">
            <ul> 
            <li> {details.customerRatings} </li>
            <li> {details.customerRatingAvg} </li>
            <li> {details.currentLocation} </li>
            <li> {details.departTime} </li>
            </ul>
            </div>
        </div>
	)
}
