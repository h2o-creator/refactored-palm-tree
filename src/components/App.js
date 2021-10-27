import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import handleReceiveInitialData from '../actions/receiveInitialData'
import LoadingBar from 'react-redux-loading-bar'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css'
import { FaHeart, FaTree } from 'react-icons/fa'


function App({ dispatch, users, questions, loading }) {

	useEffect(() => {
	    async function loadData() {
			await dispatch(handleReceiveInitialData())
		}
		loadData()
	}, [dispatch])

	return (
		<>
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
			<LoadingBar />

			<br />

			{(loading === 0) ? (
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
				<Container align='center'>
					<Spinner animation="grow" style={{
						margin: '200px'
					}} />
				</Container>
			)}
		</>
	);
}

function mapStateToProps({ users, questions, loadingBar }) {
	return {
		users: Object.values(users),
		questions: Object.values(questions),
		loading: loadingBar.default
	}
}

export default connect(mapStateToProps)(App)
