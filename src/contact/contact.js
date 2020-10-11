import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'

const bgImage = '/images/warstwa-15.png'
const ImageContainer = styled.div`
    background-image: url(${ bgImage });
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    color: #444348;
    width: 100%;
    height: 370px;
    margin-top: -3rem;
`
const StyledTitle = styled.div`
    text-align: center;
    & .intro-title {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1.4px;
        color: #008ed6;
        text-transform: uppercase;
    }
    & .title {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 1.33;
        color: #1a1a1a;
    }
    & .split-line {
        position: relative;
        width: 40px;
        padding: 10px 0;
        display: block;
        margin: auto;
        &:before {
            content: '';position: absolute;width: 45%;height: 2px;background-color: #008ed6;bottom: -2px;left: 0;
        }
        &:after {
            content: '';position: absolute;width: 45%;height: 2px;background-color: #008ed6;bottom: -2px;right: 0;
        }
    }
`

const StyledRow = styled.div`
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 6rem;
    p {
        margin-bottom: 0;
        font-size: 1.2rem;
        color: #999999;
    }
`

const StyledJumbotron = styled.div`
    width: 75%;
    margin: auto;
    padding: 4rem 2rem;
    background-color: #15141a;
    p {
        margin-bottom: 0;
        font-size: 1.2rem;
        color: #999999;
    }
    .form-control {
        text-transform: uppercase;
        border-radius: 0;
        background: transparent;
        border-color: rgba(255, 255, 255, 0.2);
        padding: 10px 12px;
        height: initial;
        margin-bottom: 15px;
    }
`

export default class contact extends Component {
    constructor( props ) {
        super( props );
        this.state = { validated: false };
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if ( form.checkValidity() === false )
        {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true })
    }

    render() {
        return (
            <Container fluid as="div">
                <Row>
                    <Col>
                        <StyledTitle>
                            <h2 className='intro-title'>stay in touch</h2>
                            <h3 className='title'>Contact us</h3>
                            <span className='split-line'></span>
                        </StyledTitle>
                    </Col>
                </Row>
                <Container>
                    <StyledRow className='row'>
                        <Col>
                            <Image src={ require( '../assets/phone.svg' ) } alt="phone" className='mb-3'/>
                            <p>Phone: (415) 124-5678</p>
                            <p>Fax: (412) 123-8290</p>
                        </Col>
                        <Col>
                            <Image src={ require( '../assets/pointer.svg' ) } alt="location" className='mb-3'/>
                            <p>1001 Brickell Bay Dr.</p>
                            <p>Suite 1900 </p>
                            <p>Miami, FL 33131</p>
                        </Col>
                        <Col>
                            <Image src={ require( '../assets/envelope.svg' ) } alt="email" className='mb-3'/>
                            <p>support@yourname.com</p>
                        </Col>
                    </StyledRow>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <Col>
                            <StyledJumbotron>
                                <Form className="w-100" noValidate validated={ this.state.validated } onSubmit={ this.handleSubmit }>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Control required type="text" placeholder="name *" />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter a username.
                                                </Form.Control.Feedback>
                                                <Form.Control required type="text" placeholder="email *" />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter a email.
                                                </Form.Control.Feedback>
                                                <Form.Control required type="text" placeholder="subject *" />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter subject.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Control required as="textarea" rows={ 6 } placeholder="message *" />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter message.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='text-right'>
                                        <Col>
                                            <Button as="input" type="submit" value="send message" size="lg"/>
                                        </Col>
                                    </Row>
                                </Form>
                            </StyledJumbotron>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <ImageContainer />
                </Row>
            </Container>
        )
    }
}
