import React from 'react'
import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import setAuthedUser from '../actions/setAuthedUser'

function Logout({ dispatch, loading, authedUser, users }) {
    return (loading === 0 && authedUser !== null) && (
        <Nav className='ms-auto'>
            <Container style={{ textAlign: 'right' }} fluid>
                <img width='50px' style={{ borderRadius: '500px', border: '1px solid white', padding: '1px', margin: '5px' }} 
                    src={users.filter((user) => user.id === authedUser).map((user) => user.avatarURL)} 
                    alt={`Displaying avatar of ${authedUser}`} />
                <NavDropdown title={users.filter((user) => user.id === authedUser).map((user) => user.name)} 
                className='d-inline-block'>
                    <NavDropdown.Item onClick={() => dispatch(setAuthedUser(null))}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>	
        </Nav>
    )
}

function mapStateToProps({ loadingBar, authedUser, users }) {
	return {
		loading: loadingBar.default,
		users: Object.values(users),
		authedUser,
	}
}

export default connect(mapStateToProps)(Logout)