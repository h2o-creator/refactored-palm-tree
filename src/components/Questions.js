import React, { useState } from 'react'
import { connect } from 'react-redux'
import ConnectedQuestion from './Question'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import { FaArrowDown, FaArrowLeft } from 'react-icons/fa'

function Questions({ questionIds, questions, authedUser }) {
    const [toggleUnanswered, setUnanswered] = useState(true)
    const [toggleAnswered, setAnswered] = useState(false)
    const unanswered = questionIds.filter((questionId) => (!questions[questionId].optionOne.votes.includes(authedUser) &&
    !questions[questionId].optionTwo.votes.includes(authedUser)))
    const answered = questionIds.filter((questionId) => (questions[questionId].optionOne.votes.includes(authedUser) ||
        questions[questionId].optionTwo.votes.includes(authedUser)))
    return (
        <>
            <Col className='col-12 col-lg-6'>
                <Row>
                    <Col className='col-10'>
                        <h3>Unanswered Questions</h3>
                    </Col>
                    <Col className='col-2'>
                        <Button aria-expanded={toggleUnanswered} aria-controls='toggle-unanswered' onClick={() => setUnanswered(!toggleUnanswered)}>
                            {
                                (toggleUnanswered === true ? <FaArrowDown /> : <FaArrowLeft />)
                            }
                        </Button>
                    </Col>
                </Row>
                <hr />
                <Collapse in={toggleUnanswered}>
                    <Row id='toggle-unanswered'>
                        {unanswered.length > 0 ? (
                            unanswered.map((questionId) => (
                                <ConnectedQuestion key={questionId} questionId={questionId} />
                            ))
                        ) : <Col>No unanswered questions to show</Col>}
                    </Row>    
                </Collapse>
            </Col>
            <Col className='col-12 col-lg-6'>
                <Row>
                    <Col className='col-10'>
                        <h3>Answered Questions</h3>

                    </Col>
                    <Col className='col-2'>
                        <Button aria-expanded={toggleAnswered} aria-controls='toggle-answered' onClick={() => setAnswered(!toggleAnswered)}>
                            {
                                (toggleAnswered === true ? <FaArrowDown /> : <FaArrowLeft />)
                            }
                        </Button>
                    </Col>
                </Row>
                <hr />
                <Collapse in={toggleAnswered}>
                    <Row id='toggle-answered'>
                        {answered.length > 0 ? (
                            answered.map((questionId) => (
                                <ConnectedQuestion key={questionId} questionId={questionId} />
                            ))
                        ) : <Col>No answered questions to show</Col>}
                    </Row>
                </Collapse>
            </Col>
        </>
    )
}

function mapStateToProps({ questions, authedUser }) {
    return {
        questionIds: Object.keys(questions)
                        .sort((a, b) => (questions[b].timestamp - questions[a].timestamp)),
        questions,
        authedUser,
    }
}

export default connect(mapStateToProps)(Questions)