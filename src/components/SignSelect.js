import React from 'react'
import { Link } from 'react-router-dom'
import '../SignSelect.css'

export default function Select(props) {
	return (
		<div className='Select'>
		<img className='logo' src={'https://i.ibb.co/kqw30n8/logo.png'}/>
			<div>
				<Link className="Login-Links" to="/DinerLogin">Login as a Diner!</Link>
			</div>
		<div>
			<Link className="Login-Links" to="/OperatorLogin">Login as an Operator!</Link>
		</div>
		</div>
	)
}
