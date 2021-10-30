import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { RiNumber1, RiNumber2 } from 'react-icons/ri'
import handleUpdateVote from '../actions/UpdateVote'

function Question({ dispatch, author, authorAvatar, optionOne, optionTwo, timestamp, id, authedUser, questions }) {
    const dateConst = new Date(timestamp)
    const date = dateConst.toLocaleDateString('en-IL');
    const time = dateConst.toLocaleTimeString('en-US');

    const history = useHistory()
    const params = useParams()

    const firstQuestionColor = hasVotedFirst() ? 'bg-dark' : 'bg-black'
    const secondQuestionColor = hasVotedSecond() ? 'bg-dark' : 'bg-black'

    function vote(e, opt) {
        if (authedUser !== null) {
            const option = opt === 1 ? 'optionOne' : 'optionTwo'
            const qid = id
            if ((option === 'optionOne' && hasVotedSecond()) || (option === 'optionTwo' && hasVotedFirst())) return false
            dispatch(handleUpdateVote({
                qid,
                answer: option,
                authedUser
            }))
        }
    }

    function hasVoted() {
        return (questions[id].optionOne.votes.includes(authedUser) ||
                questions[id].optionTwo.votes.includes(authedUser))
    }

    function hasVotedFirst() {
        return (questions[id].optionOne.votes.includes(authedUser))
    }

    function hasVotedSecond() {
        return (questions[id].optionTwo.votes.includes(authedUser))
    }

    function totalVotes() {
        return questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length 
    }

    function totalVotesPercentage(opt) {
        return (questions[id][opt].votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length) * 100).toFixed(1)
    }

    return (
        <Row>
            <Card style={{ padding: '20px', marginBottom: '5px' }} bg='black' text='light'>
                <Card.Header>
                    <Row className='d-flex'>
                        <Col className='col-lg-8'>
                            <h3>{`@${author} asks:`}</h3>
                            <h4 >Would you rather</h4>
                        </Col>
                        <Col className='col-lg-4' style={{ textAlign: 'right' }}>
                            <img src={authorAvatar} width={'100px'} alt={`${author} avatar`} 
                                style={{ borderRadius: '500px', border: '1px solid black', padding: '1px', margin: '5px' }}/>
                            <br />
                            <br />
                            <p className='blockquote-footer'>
                                {`${date} ${time}`}
                                {hasVoted() && (
                                        <>
                                            <br />
                                            {optionOne.votes.length} voted for the first option
                                            <br />
                                            {optionTwo.votes.length} voted for the second
                                            <br />
                                            {totalVotes()} voted for either
                                        </>    
                                    )
                                }    
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Container className={firstQuestionColor} style={{ border: '1px solid gray', padding: '10px', position: 'relative',
                                        borderRadius: '5px', boxShadow: '0px 0px 1px black' }}>
                            <div onClick={(e) => vote(e, 1)} style={{ position: 'relative' }}>
                                <h4>1. {optionOne.text} ({totalVotesPercentage('optionOne')}%)</h4>
                                <ProgressBar now={totalVotesPercentage('optionOne')} />
                                {hasVotedFirst() && ( <div style={{ color: 'white', backgroundColor: 'black', borderRadius: '500px', width: '60px', height: '60px', margin: '0 auto',
                                    fontWeight: '600', position: 'absolute', bottom: '-23px', right: '-28px', padding: '5px', paddingTop: '19px', textShadow: '0px 0px 5px black', textAlign: 'center' }}><span>You</span></div> )}
                            </div>
                        </Container>
                    </Row>
                    <br />
                    <Row>
                        <Container className={secondQuestionColor} style={{ border: '1px solid gray', padding: '10px', position: 'relative',
                                        borderRadius: '5px', boxShadow: '0px 0px 1px black' }}>
                            <div onClick={(e) => vote(e, 2)} style={{ position: 'relative' }}>
                                <h4>2. {optionTwo.text} ({totalVotesPercentage('optionTwo')}%)</h4>
                                <ProgressBar now={totalVotesPercentage('optionTwo')} />
                                {hasVotedSecond() && ( <div style={{ color: 'white', backgroundColor: 'black', borderRadius: '500px', width: '60px', height: '60px', margin: '0 auto',
                                    fontWeight: '600', position: 'absolute', bottom: '-23px', right: '-28px', padding: '5px', paddingTop: '19px', textShadow: '0px 0px 5px black', textAlign: 'center' }}><span>You</span></div> )}
                            </div>
                        </Container>
                    </Row>
                    <br />
                </Card.Header>
                <Card.Body>
                    <button className='btn btn-secondary m-1' title='Go To Question' onClick={(params) => params.id !== id && (history.push(`/question/${id}`))} disabled={params.id === id || authedUser === null}>
                        <FaArrowRight size='25px' />
                    </button>
                    <button className='btn btn-secondary m-1' title='Vote for first' onClick={(e) => vote(e, 1)} disabled={authedUser === null || hasVotedSecond()}>
                        <RiNumber1 size='25px' />
                        {hasVotedFirst() && ( <>(Click to unvote)</> )}
                    </button>
                    <button className='btn btn-secondary m-1' title='Vote for second' onClick={(e) => vote(e, 2)} disabled={authedUser === null || hasVotedFirst()}>
                        <RiNumber2 size='25px' />
                        {hasVotedSecond() && ( <>(Click to unvote)</> )}
                    </button>
                </Card.Body>
            </Card>
        </Row>    
    )
}

function mapStateToProps({ questions, authedUser, users }, { questionId }) {
    const question = questions[questionId]
    const { author, optionOne, optionTwo, timestamp, id } = question
    const authorAvatar = users[author].avatarURL

    return {
        id,
        author,
        optionOne,
        optionTwo,
        timestamp,
        authedUser,
        questions,
        authorAvatar
    }
}

export default connect(mapStateToProps)(Question)