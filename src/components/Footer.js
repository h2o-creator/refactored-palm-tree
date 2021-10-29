import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaTree } from 'react-icons/fa'

function Footer() {
    return (
        <Container className='bg-dark text-light align-center' fluid>
            <Row style={{ padding: '10px 0' }}>
                <Col align='center'>
                    <div className='d-inline-flex'>
                        <FaTree size='50px' color='deepskyblue' style={{
                            marginRight: '10px',
                        }} />

                        <p>
                            Project Refactored Palm Tree
                            <br />
                            Developed by Abdelhady Salah
                        </p>

                        <FaTree size='50px' color='deepskyblue' style={{
                            marginRight: '10px',
                        }} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer