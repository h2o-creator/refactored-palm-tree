import React, { useState } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import handleAddUser from '../actions/addNewUser'
import { useHistory } from 'react-router-dom'

function NewUser({ dispatch, authedUser }) {
    const history = useHistory()
    const threshold = 25

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        if (user === '' || password === '' || authedUser === null) return false
        await dispatch(handleAddUser({
            id: user.trim().split(' ').join('').toLowerCase(),
            name: user,
            password,
        }))
        history.push('/')
    }

    return (
        <Container className='custom-body' fluid>
            <Row style={{ textAlign: 'center' }}>
                <h3>Create a New User</h3>
                <p>Creating as: {authedUser}</p>
            </Row>
            <br />
            <Col lg='6' style={{ margin: '0 auto' }}>
                <Card style={{ padding: '25px' }} bg='black' text='light'>
                    <Form onSubmit={handleSubmit}>
                        <h4>Would You Rather</h4>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control className='bg-dark text-light' name='user' onChange={(e) => setUser(e.target.value)} value={user} type='text' placeholder='Enter username'
                                maxLength={100} />
                            {
                                (threshold - user.length < 25) && (
                                    <span style={{ color: 'red', float: 'right' }}>{threshold - user.length}</span>
                                )
                            }
                            <br />
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='bg-dark text-light' name='password' onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Enter password' 
                                maxLength={100} />
                            {
                                (threshold - password.length < 25) && (
                                    <span style={{ color: 'red', float: 'right' }}>{threshold - password.length}</span>
                                )
                            }
                        </Form.Group>
                        <br />
                        <Button type='submit' disabled={user === '' || password === ''}>Add User</Button>
                    </Form>
                </Card>
            </Col>
        </Container>
    )
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(NewUser)