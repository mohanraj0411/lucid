import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import pricingPlan from './pricingPlan.json'

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
const StyledCard = styled.div`
    & .card-deck{
        margin-top: 4rem;
        .card {
            border-radius: 0;
            text-align: center;
            &-header {
                font-size: 1.5rem;
                text-transform: uppercase;
                font-weight: 700;
                background-color: transparent;
                padding: 1rem 1.25rem;
            }
            &-price{
                padding: 2.1rem 1.25rem;
                .card-rate {
                    font-size: 3.7rem;
                    font-weight: 600;
                    line-height: initial;
                    small{
                        vertical-align: super;
                        font-size: 40%;
                        &:before {
                            content: '$';
                            font-weight: 600;
                        }
                    }
                }
                .rate-month {
                    display: block;
                    color: #999;
                    margin-top: -15px;
                }
            }
            .content{
                padding: 2rem 1.25rem;
                font-size: 18px;
                color: #999999;
            }
            .btn{
                border: solid 1px #e0e0e0;
                background-color: #ffffff;
                text-transform: uppercase;
                color: #000;
                height: 50px;
                width: 160px;
            }
            &.active{
                .card-header {
                    color: #008ed6;
                }
                .card-price{
                    color: #fff;
                    background-color: #008ed6;
                }
                .rate-month {
                    color: #fafafa
                }
                .btn{
                    box-shadow: 0 0 1px 0 rgba(3, 3, 3, 0.3);
                    background-color: #008ed6;
                    color: #fff;
                }
            }
        }
    }
`

export default class PricingPlan extends Component
{
    render ()
    {
        return (
            <Container fluid as="div">
                <Row>
                    <Col sm={ 12 }>
                        <StyledTitle>
                            <h2 className='intro-title'>quality has its price</h2>
                            <h3 className='title'>Pricings & Plans</h3>
                            <span className='split-line'></span>
                        </StyledTitle>
                    </Col>
                </Row>
                <Row>
                    <Col sm={10} className='offset-sm-1'>
                        <StyledCard>
                            <CardDeck>
                                {
                                    pricingPlan.map(( item, index ) =>
                                    {
                                        return <Card key={ index } className={ item.isActive ? "active" : "" }>
                                            <Card.Header>{ item.title }</Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item className='card-price'>
                                                    <span className='card-rate'>
                                                        <small></small>
                                                        { item.rate }
                                                    </span>
                                                    <span className='rate-month'>/per month</span>
                                                </ListGroup.Item>
                                                <ListGroup.Item className='border-bottom-0 content'>{ item.content }</ListGroup.Item>
                                                <ListGroup.Item><Button variant="primary">{ item.buttonText }</Button></ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    })
                                }
                            </CardDeck>
                        </StyledCard>
                    </Col>
                </Row>
            </Container>
        )
    }
}
