import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function Leaderboard() {
    return (
        <Container className='custom-body' fluid>
            <Col className='col-lg-6' style={{ margin: '0 auto' }}>
                <h1>Leaderboard</h1>
            </Col>
        </Container>
    )
}

export default Leaderboard