import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { FaTree } from 'react-icons/fa'

function Footer() {
    return (
        <Container as='footer' className='bg-black text-light d-inline-flex' fluid>
            <Col align='center' style={{ paddingTop: '5px' }}>
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