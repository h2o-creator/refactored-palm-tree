import React, { useState, useRef } from 'react'
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
    const [selectedUser, setUser] = useState(undefined)
    let userAvatar = useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        if (selectedUser === 'undefined' || selectedUser === undefined) {
            return false
        }
        dispatch(setAuthedUser(selectedUser))
        history.push('/')
    }

    function triggerUpdate(e) {
        setUser(e.target.value)
        if (e.target.value === 'undefined') {
            return userAvatar.current = null
        }
        users.filter((user) => user.id === (e.target.value)).map((user) => userAvatar.current = user.avatarURL)
    }

    return (
        <Container fluid>
            <Col lg='6' style={{ border: '1px solid black', padding: '25px', boxShadow: '0px 0px 5px black', textAlign: 'center' }}>
                {userAvatar.current !== null ? (
                    <img src={userAvatar.current} width={'150px'} alt={`Avatar of ${selectedUser}`}
                         style={{ borderRadius: '500px', border: '1px solid white', padding: '1px', margin: '5px' }} />
                ) : (<FaUserCircle size='150px' color='deepskyblue' />)}
                <h2 style={{ textAlign: 'center' }}>Hello, Guest!</h2>
                <Alert variant='warning'>
                    Please login to continue!
                </Alert>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Select value={selectedUser} onChange={triggerUpdate} >
                            <option value='undefined'>Select username to login</option>
                            {users.map((user) => (
                                <option value={user.id} key={user.id}>
                                    {user.name}
                                </option>
                            ))}</Form.Select>
                        <br />
                        <Button type='submit' variant='primary' disabled={selectedUser === 'undefined' || selectedUser === undefined}>
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