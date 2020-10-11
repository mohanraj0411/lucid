import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'
import Media from 'react-bootstrap/Media'

const StyledTitle = styled.div`
    text-align: center;
    margin-bottom: 6rem;
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
        color: #fff;
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

const StyledCaption = styled.div`
    width: 100%;
    & .carousel-caption {padding: 5rem 0;text-align: left;left: 2%;right: 2%;bottom: initial;top: 0;}
    & .comment {
        &-content {
            font-size: 1.3rem;
            margin-bottom: 2rem;
        }
        &-user {
            h5 {
                font-size: .8rem;
                opacity: .8;
            }
            p {
                font-size: 1rem;
                margin: 0;
            }
        }
    }
    & .carousel-indicators li{
        border-radius: 50%;
        background-color: transparent;
        height: 7px;
        width: 7px;
        border: 1px solid rgba(255, 255, 255, .8);
        &.active {
            background-color: #fff;
            height: 14px;
            width: 14px;
            margin-top: -3px;
        }
    }
`

export default class carouselStory extends Component
{
    render ()
    {
        return (
            <div>
                <Row>
                    <StyledCaption>
                        <Carousel className='w-100' controls={false}>
                            <Carousel.Item interval={500}>
                                <Image src={ require( '../assets/warstwa-8.png' ) } alt="lucid" className='w-100'/>
                                <Carousel.Caption>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <StyledTitle>
                                                    <h2 className='intro-title'>dip into the details</h2>
                                                    <h3 className='title'>Beautiful on every device</h3>
                                                    <span className='split-line'></span>
                                                </StyledTitle>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="comment">
                                                <p className="comment-content">Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-7.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>John Doe</h5>
                                                        <p>CEO, THE RIVERS COMPANY</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                            <Col className="comment">
                                                <p className="comment-content">A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-16.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>Dean Winchester</h5>
                                                        <p>UX DESIGNER, GOOGLE INC.</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={ 500 }>
                                <Image src={ require( '../assets/warstwa-8.png' ) } alt="lucid" className='w-100' />
                                <Carousel.Caption>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <StyledTitle>
                                                    <h2 className='intro-title'>dip into the details</h2>
                                                    <h3 className='title'>Beautiful on every device</h3>
                                                    <span className='split-line'></span>
                                                </StyledTitle>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="comment">
                                                <p className="comment-content">Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-7.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>John Doe</h5>
                                                        <p>CEO, THE RIVERS COMPANY</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                            <Col className="comment">
                                                <p className="comment-content">A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-16.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>Dean Winchester</h5>
                                                        <p>UX DESIGNER, GOOGLE INC.</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={ 500 }>
                                <Image src={ require( '../assets/warstwa-8.png' ) } alt="lucid" className='w-100' />
                                <Carousel.Caption>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <StyledTitle>
                                                    <h2 className='intro-title'>dip into the details</h2>
                                                    <h3 className='title'>Beautiful on every device</h3>
                                                    <span className='split-line'></span>
                                                </StyledTitle>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="comment">
                                                <p className="comment-content">Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-7.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>John Doe</h5>
                                                        <p>CEO, THE RIVERS COMPANY</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                            <Col className="comment">
                                                <p className="comment-content">A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-16.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>Dean Winchester</h5>
                                                        <p>UX DESIGNER, GOOGLE INC.</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={ 500 }>
                                <Image src={ require( '../assets/warstwa-8.png' ) } alt="lucid" className='w-100' />
                                <Carousel.Caption>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <StyledTitle>
                                                    <h2 className='intro-title'>dip into the details</h2>
                                                    <h3 className='title'>Beautiful on every device</h3>
                                                    <span className='split-line'></span>
                                                </StyledTitle>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="comment">
                                                <p className="comment-content">Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-7.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>John Doe</h5>
                                                        <p>CEO, THE RIVERS COMPANY</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                            <Col className="comment">
                                                <p className="comment-content">A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-16.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>Dean Winchester</h5>
                                                        <p>UX DESIGNER, GOOGLE INC.</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={ 500 }>
                                <Image src={ require( '../assets/warstwa-8.png' ) } alt="lucid" className='w-100' />
                                <Carousel.Caption>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <StyledTitle>
                                                    <h2 className='intro-title'>dip into the details</h2>
                                                    <h3 className='title'>Beautiful on every device</h3>
                                                    <span className='split-line'></span>
                                                </StyledTitle>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="comment">
                                                <p className="comment-content">Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-7.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>John Doe</h5>
                                                        <p>CEO, THE RIVERS COMPANY</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                            <Col className="comment">
                                                <p className="comment-content">A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                                <Media>
                                                    <Image width={ 64 } height={ 64 } src={ require( '../assets/warstwa-16.png' ) } className="mr-3" alt="Generic placeholder" roundedCircle />
                                                    <Media.Body className="comment-user">
                                                        <h5>Dean Winchester</h5>
                                                        <p>UX DESIGNER, GOOGLE INC.</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </StyledCaption>
                </Row>
            </div>
        )
    }
}
