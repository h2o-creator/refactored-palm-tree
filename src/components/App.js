import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import handleReceiveInitialData from '../actions/receiveInitialData'
import LoadingBar from 'react-redux-loading-bar'

function App(props) {
	const { dispatch } = props

	useLayoutEffect(() => {
		dispatch(handleReceiveInitialData())
	}, [dispatch])

	return (
		<div>
			<LoadingBar />
			refactored-palm-tree
		</div>
	);
}

function mapStateToProps({ users, questions }) {
	return {
		users,
		questions,
	}
}

export default connect(mapStateToProps)(App)
