import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaTree } from 'react-icons/fa'

function Footer() {
    return (
        <Container style={{ borderTop: '1px solid black' }} fluid>
            <Row style={{ padding: '10px 0' }}>
                <Col align='center'>
                    <br />
                    <FaTree size='50px' color='deepskyblue' style={{
                        marginRight: '10px',
                    }} />
                    <br />
                    <br />
                    <p>
                        Project Refactored Palm Tree
                        <br />
                        Developed by Abdelhady Salah
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer