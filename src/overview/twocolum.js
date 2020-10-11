import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'

const StyledTitle = styled.div`
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
        &:before {
            content: '';position: absolute;width: 45%;height: 2px;background-color: #008ed6;bottom: -2px;left: 0;
        }
        &:after {
            content: '';position: absolute;width: 45%;height: 2px;background-color: #008ed6;bottom: -2px;right: 0;
        }
    }
    & .paragraph {
        font-size: 1.3rem;
        line-height: 1.25;
        color: #999999;
    }
    & .list-image {
        list-style: none;
        padding: 0;
        font-size: 1.125rem;
        color: #1b1b1b;
        li {
            margin-bottom: 20px;
            img{
                padding-right: 10px;
            }
        }
    }
`

const StyledCol = styled.div`
    margin-top: 4rem;
    & .circle {
        border: 2px solid #e0e0e0;
        background-color: #fff;
        border-radius: 50%;
        padding: 1.5rem;
        display: inline-block;
        margin-bottom: 1.9rem;
        img {
            width: 36px;
            height: 36px;
        }
    }
`

export default class twocolum extends Component {
    render() {
        return (
            <Container fluid as="div">
                <Row>
                    <Col className="text-center">
                        <Image src={ require('../assets/devices.png')} alt="lucid"/>
                    </Col>
                    <StyledCol className="col">
                        <StyledTitle>
                            <h2 className='intro-title'>dip into the details</h2>
                            <h3 className='title'>Beautiful on every device</h3>
                            <span className='split-line'></span>
                            <p className="mt-5 paragraph">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                            <ul className='list-image mt-2'>
                                <li>
                                    <img src={ require('../assets/cup.svg') } alt="lucid"/>
                                    <span>Awesome design</span>
                                </li>
                                <li>
                                    <img src={ require('../assets/mouse.svg') } alt="lucid"/>
                                    <span>Fully responsive</span>
                                </li>
                                <li>
                                    <img src={ require('../assets/energy.svg') } alt="lucid"/>
                                    <span>Retina ready</span>
                                </li>
                                <li>
                                    <img src={ require('../assets/speedometer.svg') } alt="lucid"/>
                                    <span>Tons of features and easy to use</span>
                                </li>
                            </ul>
                        </StyledTitle>
                    </StyledCol>
                </Row>
            </Container>
        )
    }
}
