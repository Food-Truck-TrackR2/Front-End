import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import TruckCard from './TruckCard'

export default function TruckForm() {

	const [trucks, setTrucks] = useState([])
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = (data) => {
		const newTruck = {
			truckName : data.truckName,
			imgOfTruck : data.imgOfTruck,
			customerRatings : data.customerRatings,
			customerRatingAvg : data.customerRatingAvg,
			currentLocation : data.currentLocation,
			departTime : data.departTime
		}

		console.log(newTruck)
		axios.post('https://reqres.in/api/users', newTruck)
		.then(res => {
			const usersFromApi = res.data
			setTrucks([usersFromApi, ...trucks])
  })
	}

	return (
	<div>
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="truckName"
				name="truckName"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>
			<input
				type="text"
				placeholder="imgOfTruck"
				name="imgOfTruck"
				ref={register}
			/>
			<input
				type="text"
				placeholder="customerRatings"
				name="customerRatings"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>
			<input
				type="text"
				placeholder="customerRatingAvg"
				name="customerRatingAvg"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>
			<input
				type="text"
				placeholder="currentLocation"
				name="currentLocation"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>
			<input
				type="text"
				placeholder="departTime"
				name="departTime"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>

			<input type="submit" />
		</form>


		<div className="truckCont">
			{
				trucks.map(truck => {
					return(
					<TruckCard details={truck}/>
					)
				})
			}
		</div>
	</div>
	)
}
