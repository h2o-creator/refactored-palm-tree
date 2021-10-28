import React, { useRef } from 'react'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import setAuthedUser from '../actions/setAuthedUser'
import { FaUserCircle, FaArrowRight } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

function Login({ dispatch, users, history }) {
    const selectRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        const { current } = selectRef
        const { value } = current
        dispatch(setAuthedUser(value))
        history.push('/')
    }

    return (
        <Container fluid>
            <Col lg='6' style={{ border: '1px solid black', padding: '25px', boxShadow: '0px 0px 5px black', textAlign: 'center' }}>
                <FaUserCircle size='75px' color='deepskyblue' />
                <h2 style={{ textAlign: 'center' }}>Hello, Guest!</h2>
                <Alert variant='warning'>
                    Please login to continue!
                </Alert>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Select ref={selectRef} >{users.map((user) => (
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                        ))}</Form.Select>
                        <br />
                        <Button type='submit' variant='primary'>
                            Login <FaArrowRight />
                        </Button>
                    </Form.Group>
                </Form>
            </Col>    
        </Container>
    )
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

export default withRouter(connect(mapStateToProps)(Login))