import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ path, authedUser, children }) {
	return (
		<Route path={path}>
			{authedUser === null ? (
				<Redirect to='/login' />
			) : (children)}
		</Route>
	)
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(PrivateRoute)