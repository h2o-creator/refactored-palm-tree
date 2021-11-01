import React, { useState, useRef } from 'react'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import handleSetAuthedUser from '../actions/setAuthedUser'
import { FaUserCircle, FaArrowRight } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

function Login({ dispatch, users, history, authedUser, path }) {
    const [selectedUser, setUser] = useState(undefined)
    const [password, setPassword] = useState('')
    let userAvatar = useRef(null)

    async function handleSubmit(e) {
        e.preventDefault();
        if (selectedUser === 'undefined' || selectedUser === undefined || password === undefined || password === '') {
            return false
        }
        await dispatch(handleSetAuthedUser({ user: selectedUser, password }))
        if (path !== '') {
            history.push(path)
        }
    }

    function triggerUpdate(e) {
        setUser(e.target.value)
        if (e.target.value === 'undefined') {
            return userAvatar.current = null
        }
        users.filter((user) => user.id === (e.target.value)).map((user) => userAvatar.current = user.avatarURL)
    }

    return (
        <Col align='center' className='col-12 col-lg-4 custom-body'>
            <Card bg='black' text='light'>
                <Card.Header>
                    {userAvatar.current !== null ? (
                        <img src={userAvatar.current} width={'150px'} alt={`Avatar of ${selectedUser}`}
                            style={{ borderRadius: '500px', border: '1px solid white', padding: '1px', margin: '5px' }} />
                    ) : (<FaUserCircle size='150px' color='deepskyblue' />)}
                    <h2 style={{ textAlign: 'center' }}>Hello, {userAvatar.current !== null ? selectedUser : 'Guest' }!</h2>
                    <Alert variant='warning'>
                        Please login to continue!
                    </Alert>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group>
                            <Form.Select className='bg-dark text-light' value={selectedUser} onChange={triggerUpdate} >
                                <option value='undefined'>Select username to login</option>
                                {users.map((user) => (
                                    <option value={user.id} key={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </Form.Select>
                            <br />
                            <Form.Control className='bg-dark text-light' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Type your password here' />
                            <br />
                            <Button type='submit' variant='primary' disabled={selectedUser === 'undefined' || selectedUser === undefined || password === undefined
                                    || password === ''}>
                                Login <FaArrowRight />
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>    
        </Col>
    )
}

function mapStateToProps({ users, authedUser }) {
    return {
        users: Object.values(users),
        authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(Login))