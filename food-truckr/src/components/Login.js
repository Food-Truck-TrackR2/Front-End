import React from 'react'
import { useForm } from 'react-hook-form'
import { Switch, Link, Route } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers'
import formSchema from '../validation/formSchema'

export default function Login(props) {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(formSchema)
	})
	const onSubmit = (data) => console.log(data)
	console.log(errors)

	return (
		<div className="loginCont">
			<div className="infoCont">
				
			</div>
			<div class="formCont">
			<h1> SIGN IN </h1>
			<img src={"https://i.ibb.co/kqw30n8/logo.png"} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="username"
						name="username"
						ref={register({ required: true, max: 40, min: 2, maxLength: 40 })}
					/>
						<p>{errors.username?.message}</p>
					<input
						type="text"
						placeholder="password"
						name="password"
						ref={register({ required: true, max: 40, min: 5, maxLength: 40 })}
					/>
						<p>{errors.password?.message}</p>
					<input type="submit" />

					<p> Not a user? </p>
					<Link to="/signup">Sign up!</Link>
				</form>
			</form>
		</div>
		</div>
	)
}