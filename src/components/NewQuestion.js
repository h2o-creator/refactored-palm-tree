import React, { useState } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import handleAddQuestion from '../actions/addNewQuestion'
import { useHistory } from 'react-router-dom'

function NewQuestion({ dispatch, authedUser }) {
    const history = useHistory()
    const threshold = 100

    const [questionOptions, setOptions] = useState({ 
        optionOne: '',
        optionTwo: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
        if (questionOptions.optionOne === '' || questionOptions.optionTwo === '' || authedUser === null) return false
        await dispatch(handleAddQuestion({
            optionOneText: questionOptions.optionOne, 
            optionTwoText: questionOptions.optionTwo, 
            author: authedUser
        }))
        history.push('/')
    }

    function handleChange(e) {
        setOptions({
            ...questionOptions,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container className='custom-body' fluid>
            <Row style={{ textAlign: 'center' }}>
                <h3>Post a new Question</h3>
                <p>Posting as: {authedUser}</p>
            </Row>
            <br />
            <Col lg='6' style={{ margin: '0 auto' }}>
                <Card style={{ padding: '25px' }} bg='black' text='light'>
                    <Form onSubmit={handleSubmit}>
                        <h4>Would You Rather</h4>
                        <Form.Group>
                            <Form.Label>First Option</Form.Label>
                            <Form.Control className='bg-dark text-light' name='optionOne' onChange={handleChange} value={questionOptions.optionOne} type='text' placeholder='What would you prefer first?'
                                maxLength={100} />
                            {
                                (threshold - questionOptions.optionOne.length < 25) && (
                                    <span style={{ color: 'red', float: 'right' }}>{threshold - questionOptions.optionOne.length}</span>
                                )
                            }
                            <br />
                            <Form.Label>Second Option</Form.Label>
                            <Form.Control className='bg-dark text-light' name='optionTwo' onChange={handleChange} value={questionOptions.optionTwo} type='text' placeholder='What would you prefer second?' 
                                maxLength={100} />
                            {
                                (threshold - questionOptions.optionTwo.length < 25) && (
                                    <span style={{ color: 'red', float: 'right' }}>{threshold - questionOptions.optionTwo.length}</span>
                                )
                            }
                        </Form.Group>
                        <br />
                        <Button type='submit' disabled={questionOptions.optionOne === '' || questionOptions.optionTwo === ''}>Add Question</Button>
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

export default connect(mapStateToProps)(NewQuestion)