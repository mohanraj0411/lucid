import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: #15141a;
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: #444348;
    & .list-group {
        margin-bottom: 15px;
    }
    & .list-group-item{
        border: none;
        background-color: transparent;
    }
`

export default class footer extends Component {
    render() {
        return (
            <StyledContainer className='container-fluid'>
                <Row className='justify-content-center'>
                    <ListGroup horizontal>
                        <ListGroup.Item action href="#link1">
                            <Image src={ require( '../assets/behance.png' ) } alt="behance" />
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link1">
                            <Image src={ require( '../assets/dribbble.png' ) } alt="dribbble" />
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link1">
                            <Image src={ require( '../assets/twitter.png' ) } alt="twitter" />
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link1">
                            <Image src={ require( '../assets/facebook.png' ) } alt="facebook" />
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link1">
                            <Image src={ require( '../assets/linkedin.png' ) } alt="linkedin" />
                        </ListGroup.Item>
                    </ListGroup>
                </Row>
                <Row className='justify-content-center'>
                    <div className="text-center">copyright © 2014 lucid onepage theme</div>
                </Row>
            </StyledContainer>
        )
    }
}
