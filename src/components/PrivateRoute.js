import React from 'react'
import { connect } from 'react-redux'
import { Route, useLocation } from 'react-router-dom'
import { ForceLogin } from './App'

function PrivateRoute({ path, authedUser, children }) {
    const location = useLocation()
	return (
		<Route path={path}>
			{authedUser === null ? (
				ForceLogin(location.pathname !== '/login' && (location.pathname))
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