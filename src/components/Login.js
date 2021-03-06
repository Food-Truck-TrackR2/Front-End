import React from 'react'
import { useForm } from 'react-hook-form'
import { Switch, Link, Route } from 'react-router-dom'

export default function Login(props) {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = (data) => console.log(data)
	console.log(errors)

	return (
		<div>
			<h1> SIGN IN </h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="username"
						name="username"
						ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
					/>

					<input
						type="text"
						placeholder="password"
						name="password"
						ref={register({ required: true, max: 40, min: 5, maxLength: 40 })}
					/>

					<input type="submit" />

					<p> Not a user? </p>
					<Link to="/signup">Sign up!</Link>
				</form>
			</form>
		</div>
	)
}
