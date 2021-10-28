import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import ConnectedLogout from './Logout'
import { FaTree } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>
                <Container>
                    <FaTree color='deepskyblue' style={{
                        marginRight: '10px'
                    }} className='align-middle' />
                    <span className='align-middle'>Refactored Palm Tree</span>
                </Container>
            </Navbar.Brand>
            <Navbar.Collapse>
                <ConnectedLogout />
                <Nav>
                    <Container>
                        <Nav.Link as={Link} className='align-middle' to='/'>
                            Home
                        </Nav.Link>
                    </Container>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation