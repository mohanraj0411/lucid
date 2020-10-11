import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import featuresContent from './feature.json'

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
    & .split-line{
        position: relative;
        width: 40px;
        margin: 30px auto;
        display: block;
        &:before{
            content: '';position: absolute;width: 45%;height: 2px;background-color: #008ed6;bottom: -2px;left: 0;
        }
        &:after{
            content: '';position: absolute;width: 45%;height: 2px;background-color: #008ed6;bottom: -2px;right: 0;
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

export default class features extends Component {
    render() {
        return (
            <Container fluid as="div">
                <Row>
                    <Col sm={12}>
                        <StyledTitle>
                            <h2 className='intro-title'>product overview</h2>
                            <h3 className='title'>List of amazing features</h3>
                            <span className='split-line'></span>
                        </StyledTitle>
                    </Col>
                </Row>
                <StyledCol className="row">
                {
                    featuresContent.map((item, index) => {
                        return <Col key={index} className="text-center">
                            <span className='circle'><img src={item.imgPath} alt="lucid" /></span>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </Col>
                    })
                }
                </StyledCol>
            </Container>
        )
    }
}
