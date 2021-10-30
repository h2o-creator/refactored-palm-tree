import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import ConnectedTopUser from './TopUser'

function Leaderboard({ topUsers }) {
    console.log(topUsers)
    return (
        <Container className='custom-body' fluid>
            <Col className='col-lg-6' style={{ margin: '0 auto' }}>
                <h1>Leaderboard</h1>
            </Col>
            <Row>
                <Col className='col-lg-6' style={{ margin: '0 auto' }}>
                    {topUsers.length > 0 ? (
                        topUsers.map((topUser) => (
                            <ConnectedTopUser key={topUser.id} id={topUser.id} name={topUser.name} 
                                askedQuestions={topUser.askedQuestions} answeredQuestions={topUser.answeredQuestions} totalScore={topUser.totalScore}
                                avatar={topUser.avatar} />
                        ))
                    ) : (<p>No top users to show</p>)}
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps({ users, questions }) {
    let topUsers = []
    Object.values(users).forEach((user) => {
        let askedQuestions = Object.values(questions).filter((question) => (question.author === user.id)).length
        let answeredQuestions = Object.values(questions).filter((question) => (question.optionOne.votes.includes(user.id) ||
            question.optionTwo.votes.includes(user.id))).length
        
        topUsers = topUsers.concat({
            id: user.id,
            name: user.name,
            askedQuestions,
            answeredQuestions,
            totalScore: askedQuestions + answeredQuestions,
            avatar: user.avatarURL,
        })
    })

    topUsers.splice(3)
        .sort((a, b) => b.totalScore - a.totalScore)
    
    return {
        topUsers,
    }
}

export default connect(mapStateToProps)(Leaderboard)