import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ConnectedLogin from './Login'
import ConnectedQuestions from './Questions'

function Dashboard({ authedUser }) {
    return (
        <Container className='d-flex d-inline-block custom-body' fluid>
            <Row style={{ margin: '0 auto' }}>
                <ConnectedQuestions />
                {
                    (authedUser === null) && (
                        <ConnectedLogin />
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