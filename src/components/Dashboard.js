import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import { FaHeart } from 'react-icons/fa'
import ConnectedLogin from './Login'

function Dashboard({ questions, authedUser }) {
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
                    <Container style={{ border: '1px solid black', padding: '25px', boxShadow: '0px 0px 5px black' }} fluid>
                        <div>Questions</div>
                        {questions.map((question) => question.text)}
                    </Container>
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

function mapStateToProps({ questions, authedUser }) {
    return {
        questions: Object.values(questions),
        authedUser,
    }
}

export default connect(mapStateToProps)(Dashboard)