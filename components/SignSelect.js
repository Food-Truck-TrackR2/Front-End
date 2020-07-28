import React from 'react'
import { Link } from 'react-router-dom'

export default function Select(props) {
	return (
		<div>
			<div>
				<Link to="/dinersign">Sign up as diner</Link>
			</div>

			<Link to="/trucksign">Sign up as a driver!</Link>
		</div>
	)
}
