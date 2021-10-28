import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ConnectedQuestion from './Question'
import { Redirect } from 'react-router-dom'

function QuestionPage({ questions }) {
    let question = null
    const params = useParams()

    Object.keys(questions).filter((questionId) => (questionId === params.id)).length !== 0 && (
        question = params.id
    )

    return (
        <Container className='col-11' fluid>
            <Row>
                <Col>
                    <h1 style={{ textAlign: 'center' }}>Would You Rather</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        (question !== null) ? (
                            <ConnectedQuestion questionId={question} />
                        ) : ( <Redirect to='/404' /> )
                    }
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps({ questions }) {
    return {
        questions,
    }
}

export default connect(mapStateToProps)(QuestionPage)