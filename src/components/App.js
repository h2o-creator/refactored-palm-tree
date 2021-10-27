import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import handleReceiveInitialData from '../actions/receiveInitialData'
import LoadingBar from 'react-redux-loading-bar'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.css'
import { FaHeart, FaTree } from 'react-icons/fa'


function App({ dispatch }) {

	useLayoutEffect(() => {
		dispatch(handleReceiveInitialData())
	}, [dispatch])

	return (
		<>
			<LoadingBar />

			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand>
						<FaTree color='green' className='d-inline-block align-middle' style={{
							marginRight: '10px'
						}} />
						<span className='align-middle'>Refactored Palm Tree</span>
					</Navbar.Brand>
				</Container>
			</Navbar>

			<br />

			<Container fluid>
				<Row>
					<Col>
						<Alert variant='secondary'>Welcome to refactored-palm-tree! <FaHeart color='red' /></Alert>
					</Col>
				</Row>
			</Container>
		</>
	);
}

function mapStateToProps({ users, questions }) {
	return {
		users,
		questions,
	}
}

export default connect(mapStateToProps)(App)
