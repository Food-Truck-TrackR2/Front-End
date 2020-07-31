import React from 'react'
import { useForm } from 'react-hook-form'

export default function menuForm() {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = (data) => console.log(data)
	console.log(errors)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="menuName" name="menuName" ref={register({required: true, max: 128})} />
      <input type="text" placeholder="menuDesc" name="menuDesc" ref={register} />
      <input type="text" placeholder="menuPhoto" name="menuPhoto" ref={register} />
      <input type="text" placeholder="menuPrice" name="menuPrice" ref={register} />
      <input type="text" placeholder="customerRatingAvg" name="customerRatingAvg" ref={register} />

      <input type="submit" />
    </form>
	)
}
