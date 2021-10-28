import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import { FaHeart } from 'react-icons/fa'
import ConnectedLogin from './Login'
import ConnectedQuestions from './Questions'

function Dashboard({ authedUser }) {
    return (
        <Container className='col-11' fluid>
            <Row>
                <Col>
                    <h1 style={{ textAlign: 'center' }}>Refactored Palm Tree</h1>
                    <Alert variant='secondary'>
                        Welcome to refactored-palm-tree!
                        <FaHeart style={{ marginLeft: '5px' }} color='red' />
                    </Alert>
                </Col>
            </Row>
            <Row>
                <Col className={`col-${authedUser === null ? '6' : '12'}`}>
                    <ConnectedQuestions />
                </Col>
                {
                    (authedUser === null) && (
                        <Col className='col-6'>
                            <ConnectedLogin />
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Dashboard)