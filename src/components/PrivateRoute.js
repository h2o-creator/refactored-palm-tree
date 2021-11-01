import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, useLocation, Redirect } from 'react-router-dom'
import { setRedirectLocation } from '../actions/setRedirectLocation'

function PrivateRoute({ dispatch, path, authedUser, children }) {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/login') {
            dispatch(setRedirectLocation(location.pathname))
        }
    }, [dispatch, location.pathname])

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