import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

const StyledCaption = styled.div`
    width: 100%;
    & .carousel-caption {text-align: left;left: 2%;right: 2%;bottom: 0;padding-bottom: 0;}
    & .btn-download {
        border-radius: 3.8px;box-shadow: 0 0 3px 0 rgba(3, 3, 3, .1);background-color: #008ed6;text-transform: uppercase;font-size: 16px;
        + .btn{
            margin-left: 20px
        }
    }
    & .btn-features {border-radius: 3.8px; border: solid 1px rgba(255, 255, 255, 0.2);color: #fff;text-transform: uppercase;font-size: 16px;
        &:hover {
            background-color: #008ed6;
            border-color: #008ed6;
        }
    }
    & .intro-title {
        font-size: 14px;
        color: #008ed6;
        text-transform: uppercase;
    }
    & .title {
        font-size: 3rem;
        line-height: 4rem;
    }
    & .paragraph {
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: #999;
    }
    & .carousel-item{
        @media (max-width: 767px) {
            height: 810px;
            & img.ml-sm-auto {
                margin-top: 30px !important;
            }
        }
    }
`

export default class homeCarousel extends Component {
    render() {
        return (
            <StyledCaption>
                <Carousel controls={false} indicators={false} style={{ backgroundColor:'#000000' }} >
                    <Carousel.Item>
                        <img className="d-block" src={require(`../assets/homeCarousel.png`)} alt="First slide" />
                            <Carousel.Caption>
                                <Row>
                                    <Col sm>
                                        <h3 className='intro-title'>introducing lucid theme</h3>
                                        <h2 className='title'>Carefully crafted and beautiful landing page.</h2>
                                        <p className='paragraph'>Etiam ullamcorper et turpis eget hendrerit. Praesent varius risus mi, at elementum magna ultricies accumsan. Cras venenatis lacus sed dolor placerat tempus. Morbi blandit at neque ut imperdiet.</p>
                                        <Button variant="primary" size="lg" className='btn-download'>download now</Button>
                                        <Button variant="outline-primary" size="lg" className='btn-features'>view features</Button>
                                    </Col>
                                    <Col sm>
                                        <img className="d-block w-75 ml-sm-auto m-auto" src={require('../assets/devices-kopia.png')} alt="First slide" />
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </StyledCaption>
        )
    }
}
