import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { RiNumber1, RiNumber2 } from 'react-icons/ri'
import handleUpdateVote from '../actions/UpdateVote'

function Question({ dispatch, author, optionOne, optionTwo, timestamp, id, authedUser }) {
    const dateConst = new Date(timestamp)
    const date = dateConst.toLocaleDateString('en-IL');
    const time = dateConst.toLocaleTimeString('en-US');

    const history = useHistory()
    const params = useParams()

    function vote(e, opt) {
        if (authedUser !== null) {
            const option = opt === 1 ? 'optionOne' : 'optionTwo'
            const qid = id
            dispatch(handleUpdateVote({
                qid,
                answer: option,
                authedUser
            }))
        }
    }

    return (
        <Row>
            <Card style={{ padding: '20px' }}>
                <Card.Header>
                    <h4 >{`Would you rather ${optionOne.text} (${optionOne.votes.length}) `} or {` (${optionTwo.votes.length}) ${optionTwo.text}? `}</h4>
                    <br />
                    <p className='blockquote-footer'>
                        {`Asked by ${author}`} 
                        <br />
                        {`${date} ${time}`}
                    </p>
                    <p style={{ float: 'right' }}>{`${optionOne.votes.length} voted for the first option, ${optionTwo.votes.length} voted for the second`}</p>
                </Card.Header>
                <Card.Body className='d-flex'>
                    <Col className='col-1'>
                        <button title='Go To Question' onClick={(params) => params.id !== id && (history.push(`/question/${id}`))} disabled={params.id === id}>
                            <FaArrowRight size='25px' />
                        </button>
                    </Col>
                    <Col className='col-1'>
                        <button title='Vote for first' onClick={(e) => vote(e, 1)} disabled={authedUser === null}>
                            <RiNumber1 color='green' size='25px' />
                        </button>
                    </Col>
                    <Col className='col-1'>
                        <button title='Vote for second' onClick={(e) => vote(e, 2)} disabled={authedUser === null}>
                            <RiNumber2 color='red' size='25px' />
                        </button>
                    </Col>
                </Card.Body>
            </Card>
            <br />
        </Row>    
    )
}

function mapStateToProps({ questions, authedUser }, { questionId }) {
    const question = questions[questionId]
    const { author, optionOne, optionTwo, timestamp, id } = question

    return {
        id,
        author,
        optionOne,
        optionTwo,
        timestamp,
        authedUser
    }
}

export default connect(mapStateToProps)(Question)