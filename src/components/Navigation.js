import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import ConnectedLogout from './Logout'
import { FaTree } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Navigation({ authedUser }) {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand>
                    <Container>
                        <FaTree color='deepskyblue' style={{
                            marginRight: '10px'
                        }} className='align-middle' />
                        <span className='align-middle'>Refactored Palm Tree</span>
                    </Container>
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls='links-navbar' />
                    <Navbar.Collapse id='links-navbar'>
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} className='align-middle' to='/'>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} className='align-middle' to='/new-question'>
                                New Question
                            </Nav.Link>
                            {authedUser === null && (
                                <Nav.Link as={Link} className='align-middle' to='/login'>
                                    Login
                                </Nav.Link>
                            )}
                        </Nav>
                        <ConnectedLogout />
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Navigation)