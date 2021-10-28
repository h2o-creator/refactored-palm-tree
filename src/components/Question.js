import React from 'react'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function Question({ author, optionOne, optionTwo, timestamp, id }) {
    const dateConst = new Date(timestamp)
    const date = dateConst.toLocaleDateString('en-IL');
    const time = dateConst.toLocaleTimeString('en-US');

    const history = useHistory()
    const params = useParams()

    return (
        <>
            <Card style={{ padding: '20px' }}>
                <Card.Header>
                    <h4 >{`Would you rather ${optionOne.text} (${optionOne.votes.length}) `} <span style={{ color: 'red' }}>||</span> {` (${optionTwo.votes.length}) ${optionTwo.text}? `}</h4>
                    <br />
                    <p className='blockquote-footer'>
                        {`Asked by ${author}`} 
                        <br />
                        {`${date} ${time}`}
                    </p>
                    <p style={{ float: 'right' }}>{`${optionOne.votes.length} voted for the first option, ${optionTwo.votes.length} voted for the second`}</p>
                </Card.Header>
                <Card.Body>                    
                    <button title='Go To Question' onClick={(params) => params.id !== id && (history.push(`/question/${id}`))} disabled={params.id === id}>
                        <FaArrowRight size='25px' />
                    </button>
                </Card.Body>
            </Card>
            <br />
        </>    
    )
}

function mapStateToProps({ questions }, { questionId }) {
    const question = questions[questionId]
    const { author, optionOne, optionTwo, timestamp, id } = question

    return {
        id,
        author,
        optionOne,
        optionTwo,
        timestamp,
    }
}

export default connect(mapStateToProps)(Question)