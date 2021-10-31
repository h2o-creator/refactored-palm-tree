import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { connect } from 'react-redux'
import { GiDiamondTrophy, GiLaurelsTrophy, GiTrophy } from 'react-icons/gi'

function TopUser({ id, name, avatar, askedQuestions, answeredQuestions, totalScore, totalQuestions, totalAnswers, index, authedUser }) {
    function asksPercent() {
        return (((askedQuestions / totalQuestions) * 100).toFixed(1))
    }

    function answersPercent() {
        return (((answeredQuestions / totalAnswers) * 100).toFixed(1))
    }

    return (
        <Row>
            <Card style={{ padding: '20px', marginBottom: '5px' }} bg='black' text='light'>
                <Card.Header>
                    <Row className='d-flex'>
                        <Col className='col-lg-8'>
                            <h3>{`#${index} ${name}`}</h3>
                            {
                                authedUser === id && (
                                    <h4>It's You! <span role='img' aria-label='victory-emojis'>🎉🎉🏆</span></h4>
                                )
                            }
                        </Col>
                        <Col className='col-lg-4' style={{ textAlign: 'right' }}>
                            <img src={avatar} width={'100px'} alt={`${name} avatar`} 
                                style={{ borderRadius: '500px', border: '1px solid black', padding: '1px', margin: '5px' }}/>
                            {
                                index === 1 ? <GiDiamondTrophy color='orange' size='50px' /> : (index === 2 ? <GiLaurelsTrophy color='green' size='50px' /> : <GiTrophy size='50px' />)
                            }
                            <br />
                            <br />
                            <p className='blockquote-footer'>
                                {askedQuestions} asked questions
                                <br />
                                {answeredQuestions} answered
                                <br />
                                {totalScore} total score
                            </p>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Container className='bg-dark text-light' style={{ border: '1px solid gray', padding: '10px', position: 'relative',
                                        borderRadius: '5px', boxShadow: '0px 0px 1px black' }}>
                            <div>
                                <h4>Questions Asked ({asksPercent()}%)</h4>
                                <ProgressBar now={asksPercent()} label={`${askedQuestions} out of ${totalQuestions}`} />
                            </div>
                        </Container>
                    </Row>
                    <br />
                    <Row>
                        <Container className='bg-dark text-light' style={{ border: '1px solid gray', padding: '10px', position: 'relative',
                                        borderRadius: '5px', boxShadow: '0px 0px 1px black' }}>
                            <div>
                                <h4>Questions Answered ({answersPercent()}%)</h4>
                                <ProgressBar now={answersPercent()} label={`${answeredQuestions} out of ${totalAnswers}`} />
                            </div>
                        </Container>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
    )
}

function mapStateToProps({ questions, authedUser }) {
    return {
        totalQuestions: Object.values(questions).length,
        totalAnswers: Object.values(questions).filter((question) => question.optionOne.votes.length > 0 || question.optionTwo.votes.length).length,
        authedUser
    }
}

export default connect(mapStateToProps)(TopUser)