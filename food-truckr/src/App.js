import React from 'react'
import './App.css'
import Login from './components/Login'
import Select from './components/SignSelect'
import DinerSign from './components/DinerSign'
import TruckSign from './components/TruckSign'
import TruckForm from './components/TruckForm'
import { Switch, Link, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Switch>
			<Route path="/truckadd">
					<TruckForm />
				</Route>
				<Route path="/trucksign">
					<TruckSign />
				</Route>
				<Route path="/dinersign">
					<DinerSign />
				</Route>
				<Route path="/signup">
					<Select />
				</Route>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</div>
	)
}

export default App
