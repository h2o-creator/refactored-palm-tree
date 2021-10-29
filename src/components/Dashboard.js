import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import ConnectedLogin from './Login'
import ConnectedQuestions from './Questions'

function Dashboard({ authedUser }) {
    return (
        <Container className='col-12 d-flex d-inline-block' fluid>
            <ConnectedQuestions />
            {
                (authedUser === null) && (
                    <ConnectedLogin />
                )
            }
        </Container>
    )
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Dashboard)