import React from 'react'
import { useForm } from 'react-hook-form'

export default function TruckForm() {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = (data) => console.log(data)
	console.log(errors)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="truckName"
				name="truckName"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>
			<input
				type="undefined"
				placeholder="imgOfTruck"
				name="imgOfTruck"
				ref={register}
			/>
			<input
				type="undefined"
				placeholder="customerRatings"
				name="customerRatings"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>
			<input
				type="undefined"
				placeholder="customerRatingAvg"
				name="customerRatingAvg"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>
			<input
				type="undefined"
				placeholder="currentLocation"
				name="currentLocation"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>
			<input
				type="undefined"
				placeholder="departTime"
				name="departTime"
				ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
			/>

			<input type="submit" />
		</form>
	)
}
