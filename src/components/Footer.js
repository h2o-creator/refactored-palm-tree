import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { FaTree } from 'react-icons/fa'

function Footer() {
    return (
        <Container as='footer' className='bg-dark text-light d-inline-flex' fluid>
            <Col align='center'>
                <FaTree size='20px' color='deepskyblue' />
                Project Refactored Palm Tree
                <FaTree size='20px' color='deepskyblue' />
                <br />
                Developed by Abdelhady Salah
            </Col>
        </Container>
    )
}

export default Footer