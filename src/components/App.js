import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import handleReceiveInitialData from '../actions/receiveInitialData'
import LoadingBar from 'react-redux-loading-bar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css'
import { FaHeart, FaTree } from 'react-icons/fa'
import ConnectedLogin from './Login'

function App({ dispatch, loading, authedUser, users }) {

	useEffect(() => {
	    async function loadData() {
			await dispatch(handleReceiveInitialData())
		}
		loadData()
	}, [dispatch])

	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand>
					<FaTree color='green' style={{
						marginRight: '10px'
					}} className='align-middle' />
					<span className='align-middle'>Refactored Palm Tree</span>
				</Navbar.Brand>
				<Navbar.Collapse>
					<Nav className='me-auto'>
						<Nav.Link className='align-middle'>
							Home
						</Nav.Link>
					</Nav>
					{
						(loading === 0 && authedUser !== null) && (
							<Nav>
								<Nav.Link className='align-middle'>
									<img width='50px' style={{ borderRadius: '500px', border: '1px solid white', padding: '1px', margin: '5px' }} 
										src={users.filter((user) => user.id === authedUser).map((user) => user.avatarURL)} 
										alt={`Displaying avatar of ${authedUser}`} />
									{users.filter((user) => user.id === authedUser).map((user) => user.name)}
								</Nav.Link>
							</Nav>
						)
					}
				</Navbar.Collapse>
				</Navbar>
			<LoadingBar />

			<br />

			{(loading === 0) ? (
				(authedUser !== null) ? (
					<Container fluid>
						<Row>
							<Col>
								<Alert variant='secondary'>
									Welcome to refactored-palm-tree! 
									<FaHeart color='red' />
								</Alert>
							</Col>
						</Row>
					</Container>
				) : (
					<Container fluid>
						<Row>
							<Col>
								<Alert variant='warning'>
									Please login to continue!
								</Alert>
							</Col>
						</Row>
						<br />
						<ConnectedLogin />
					</Container>
				)
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

function mapStateToProps({ loadingBar, authedUser, users }) {
	return {
		loading: loadingBar.default,
		users: Object.values(users),
		authedUser,
	}
}

export default connect(mapStateToProps)(App)
