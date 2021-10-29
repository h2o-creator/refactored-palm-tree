import React, { useState } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { formatQuestion } from '../utils/helpers'

function NewQuestion({ authedUser }) {
    const threshold = 100

    const [questionOptions, setOptions] = useState({ 
        optionOne: '',
        optionTwo: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        if (questionOptions.optionOne === '' || questionOptions.optionTwo === '') return false
        const questionData = formatQuestion({
            optionOneText: questionOptions.optionOne, 
            optionTwoText: questionOptions.optionTwo, 
            author: authedUser
        })
    }

    function handleChange(e) {
        setOptions({
            ...questionOptions,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container align='center' className='custom-body' fluid>
            <h3>Post a new Question</h3>
            <p>Posting as: {authedUser}</p>
            <br />
            <Col lg='6' style={{ border: '1px solid black', padding: '25px', boxShadow: '0px 0px 5px black', textAlign: 'center' }} >
                <Form onSubmit={handleSubmit}>
                    <h4>Would You Rather</h4>
                    <Form.Group>
                        <Form.Label>First Option</Form.Label>
                        <Form.Control name='optionOne' onChange={handleChange} value={questionOptions.optionOne} type='text' placeholder='What would you prefer first?'
                            maxLength={100} />
                        {
                            (threshold - questionOptions.optionOne.length < 25) && (
                                <span style={{ color: 'red', float: 'right' }}>{threshold - questionOptions.optionOne.length}</span>
                            )
                        }
                        <br />
                        <Form.Label>Second Option</Form.Label>
                        <Form.Control name='optionTwo' onChange={handleChange} value={questionOptions.optionTwo} type='text' placeholder='What would you prefer second?' 
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