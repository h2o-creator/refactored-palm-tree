import React, { useRef } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import setAuthedUser from '../actions/setAuthedUser'
import { FaUserCircle, FaArrowRight } from 'react-icons/fa'

function Login({ dispatch, users }) {
    const selectRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        const { current } = selectRef
        const { value } = current
        dispatch(setAuthedUser(value))
    }

    return (
        <Container style={{ border: '1px solid black', padding: '25px', boxShadow: '0px 0px 5px black' }} fluid>
            <Row>
                <Col>
                    <h2 style={{ textAlign: 'center' }}>Hello, Guest!</h2>
                    <Alert variant='warning'>
                        Please login to continue!
                    </Alert>
                </Col>
            </Row>
            <br />
            <Row>
                <Col style={{ border: '1px solid black', margin: '0 auto', padding: '25px', textAlign: 'center' }} className='col-6'>
                    <div style={{ display: 'inline-block' }}>
                        <FaUserCircle size='50px' />
                        <br />
                        <h1>Login</h1>
                    </div>
                    <br />
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group as={Col} className='d-inline-block col-10'>
                            <Form.Select ref={selectRef} >{users.map((user) => (
                                <option value={user.id} key={user.id}>
                                    {user.name}
                                </option>
                            ))}</Form.Select>
                        </Form.Group>
                        <Col className='col-2 d-inline-block'>
                            <Button type='submit' variant='dark'>
                                <FaArrowRight />
                            </Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)