import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import handleReceiveInitialData from '../actions/receiveInitialData'
import LoadingBar from 'react-redux-loading-bar'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css'
import Dashboard from './Dashboard'
import ConnectedNavigation from './Navigation'
import { Route, Switch, useLocation, Link, Redirect } from 'react-router-dom'
import Footer from './Footer'
import { FaSadTear, FaCoffee } from 'react-icons/fa'
import ConnectedQuestionPage from './QuestionPage'
import ConnectedLogin from './Login'
import ConnectedNewQuestion from './NewQuestion'
import ConnectedNewUser from './NewUser'
import ConnectedLeaderboard from './Leaderboard'

function App({ dispatch, loading, authedUser }) {

	useEffect(() => {
	    async function loadData() {
			await dispatch(handleReceiveInitialData())
		}
		loadData()
	}, [dispatch])

	return (
		<>
			<ConnectedNavigation />

			<LoadingBar style={{ backgroundColor: 'deepskyblue' }} />

			<br />

			{(loading === 0 || (loading === 1 && authedUser !== null)) ? (
				<Switch>
					<Route exact path='/'>
						<Dashboard />
					</Route>
					<Route path={['/question/:id', '/questions/:id']}>
						{(authedUser === null) ? (
							<Redirect to='/login' />
						) : (
							<ConnectedQuestionPage />
						) }
					</Route>
					<Route path='/login'>
						<ForceLogin />
					</Route>
					<Route path={['/new-question', '/add']}>
						{(authedUser === null) ? (
							<Redirect to='/login' />
						) : (
							<ConnectedNewQuestion />
						) }
					</Route>
					<Route path={['/new-user', '/add-user']}>
						{(authedUser === null) ? (
							<Redirect to='/login' />
						) : (
							<ConnectedNewUser />
						) }
					</Route>
					<Route path='/leaderboard'>
						{(authedUser === null) ? (
							<Redirect to='/login' />
						) : (
							<ConnectedLeaderboard />
						) }
					</Route>
					<Route path='*'>
						<PageNotFound />
					</Route>
				</Switch>
			) : (
				<ShowLoadingSpinner />
			)}

			<br />

			<Footer />
		</>
	);
}

function PageNotFound() {
	const location = useLocation();
	return (
		<Container style={{ textAlign: 'center' }} className='col-6' fluid>
			<FaSadTear size='500px' color='orange' />
			<br />
			<h4>Requested location does not exist</h4>
			<p>Couldn't find the requested path: {location.pathname}</p>
			<Link to='/'>Grab a coffee, and return to home <FaCoffee /></Link>
			<p>If you still think this was an error, kindly let us know by contacting us.</p>
		</Container>
	)
}

function ShowLoadingSpinner() {
	return (
		<Container align='center' fluid>
			<Spinner animation="grow" style={{
				backgroundColor: 'white',
				margin: '200px',
				boxShadow: '0px 0px 25px deepskyblue'
			}} />
		</Container>
	)
}

function ForceLogin() {
	return (
		<Container align='center' fluid>
			<ConnectedLogin />
		</Container>
	)
}

function mapStateToProps({ loadingBar, authedUser }) {
	return {
		loading: loadingBar.default,
		authedUser
	}
}

export default connect(mapStateToProps)(App)
