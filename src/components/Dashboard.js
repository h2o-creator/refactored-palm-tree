import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ConnectedQuestions from './Questions'

function Dashboard() {
    return (
        <Container className='custom-body' fluid>
            <Row>
                <ConnectedQuestions />
            </Row>
        </Container>
    )
}

export default Dashboard