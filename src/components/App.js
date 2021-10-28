import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import handleReceiveInitialData from '../actions/receiveInitialData'
import LoadingBar from 'react-redux-loading-bar'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css'
import ConnectedDashboard from './Dashboard'
import Navigation from './Navigation'
import { Route } from 'react-router-dom'

function App({ dispatch, loading }) {

	useEffect(() => {
	    async function loadData() {
			await dispatch(handleReceiveInitialData())
		}
		loadData()
	}, [dispatch])

	return (
		<>
			<Navigation />

			<LoadingBar />

			<br />

			{(loading === 0) ? (
				<Route exact path='/' component={ConnectedDashboard} />
			) : (
				<Container align='center' fluid>
					<Spinner animation="grow" style={{
						margin: '200px'
					}} />
				</Container>
			)}
		</>
	);
}

function mapStateToProps({ loadingBar }) {
	return {
		loading: loadingBar.default,
	}
}

export default connect(mapStateToProps)(App)
